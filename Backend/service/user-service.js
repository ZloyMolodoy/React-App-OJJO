const UserModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service.js');
const tokenService = require('./token-service.js');
const UserDto = require('../dtos/user-dto.js');
const ApiError = require('../exceptions/api-error.js');
const userModel = require('../models/user-model.js');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);

        const user = await UserModel.create({email, password: hashPassword, role: "standart"})

        const userDto = new UserDto(user); // id, email, role
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async login(email, password)
    {
        const user = await UserModel.findOne({email})
        if(!user)
        {
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) 
        {
            throw ApiError.BadRequest("Неверный пароль");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
    async logout(refreshToken)
    {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }
    async refresh(refreshToken)
    {
        if(!refreshToken)
        {
            throw ApiError.UnauthorizedError();
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) 
        {
            throw ApiError.UnauthorizedError();
        }
        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async getAllUsers() 
    {
        const users = await UserModel.find();
        return users;
    }
}

module.exports = new UserService();