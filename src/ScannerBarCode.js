import React, { useEffect, useRef, useState } from 'react'
import { BrowserBarcodeReader } from '@zxing/library';


const Scanner = () => {
    const codeReader = new BrowserBarcodeReader()

    const divScanner = useRef(null);
    const [code, setCode] = useState('not found');

    useEffect(() => {

        console.log('ZXing code reader initialized2')
        codeReader.getVideoInputDevices()
            .then((videoInputDevices) => {
                const selectedDeviceId = videoInputDevices[0].deviceId

                codeReader.decodeOnceFromVideoDevice(selectedDeviceId, 'video').then((result) => {
                    if (result) {
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

    const handleReset = () => {
        codeReader.reset();
    }
    return (
        <div id="scanner-container" ref={divScanner}>
            <video id="video" className="dbrScanner-video" playsInline />
            <button onClick={handleReset}>Reset</button>
            <div>Code: {code}</div>
        </div>
    )
}

export default Scanner
