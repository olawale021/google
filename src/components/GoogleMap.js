// src/components/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px', // Adjust the height as needed
    };

    const center = {
    lat: 40.7128, // Latitude of your desired center
    lng: -74.0060, // Longitude of your desired center
    };

    function Map() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyByryNNmmrWoloySkGxA-iP8S4Ev09VAD8">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {/* Add any markers, polygons, or other map components here */}
        </GoogleMap>
        </LoadScript>
    );
    }

export default Map;
