import React from 'react'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const CameraApp = () => (
    <Camera
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        onTakePhoto={(data) => { console.log('data', data) }}
        imageType={IMAGE_TYPES.JPG}
        imageCompression={1}
    />
)


export default CameraApp;