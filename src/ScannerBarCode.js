import React, { useEffect, useRef, useState } from 'react'
import { BrowserBarcodeReader } from '@zxing/library';


const Scanner = () => {
    const codeReader = new BrowserBarcodeReader()

    const divScanner = useRef(null);
    const [code, setCode] = useState('not found');
    const [start, setStart] = useState(false);

    useEffect(() => {
        const startScanner = () => {
            codeReader.decodeOnceFromVideoDevice(undefined, 'video').then((result) => {
                if (result) {
                    setCode(result.text)
                    console.log('result', result)
                }
            }).catch((err) => {
                console.error(err)
            })
        }

        startScanner()
    }, [codeReader, start])

    const handleReset = () => {
        codeReader.reset();
    }

    const handleStart = () => {
        setStart(true)
    }
    return (
        <div id="scanner-container" ref={divScanner}>
            <video id="video" className="dbrScanner-video" playsInline />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStart}>Start</button>
            <div>Code: {code}</div>
        </div>
    )
}

export default Scanner
