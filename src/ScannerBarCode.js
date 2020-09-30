import React, { useEffect, useRef, useState } from 'react'
import { BrowserBarcodeReader } from '@zxing/library';


const Scanner = () => {
    const divScanner = useRef(null);
    const [code, setCode] = useState('not found');

    useEffect(() => {

        const codeReader = new BrowserBarcodeReader()
        console.log('ZXing code reader initialized')
        codeReader.getVideoInputDevices()
            .then((videoInputDevices) => {
               const selectedDeviceId = videoInputDevices[0].deviceId

                // document.getElementById('startButton').addEventListener('click', () => {
                    codeReader.decodeOnceFromVideoDevice(selectedDeviceId, 'video').then((result) => {
                        if(result) {
                            setCode(result.text)
                            console.log('result', result)
                        }
                    }).catch((err) => {
                        console.error(err)
                    })
                })
            .catch((err) => {
                console.error(err)
            })
    })

    return (
        <div id="scanner-container" ref={divScanner}>
            <video id="video" className="dbrScanner-video" playsInline />
            <div>Code: {code}</div>
        </div>
    )
}

export default Scanner
