import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.1245169777294!2d30.36778661227902!3d59.93007598480467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631bb92b2b7f5%3A0xfc6c3540c8fb3df8!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDE0MCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAzNg!5e0!3m2!1sru!2sru!4v1669831772465!5m2!1sru!2sru" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}