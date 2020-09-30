import React, { useEffect, useRef } from 'react'


const Dynamsoft = window.Dynamsoft;

const Scanner = () => {
    const divScanner = useRef(null);

    useEffect(() => {
        console.log('auauauaua')
        const createScanner = async () => {
            let scanner = await Dynamsoft.BarcodeScanner.createInstance();
            scanner.setUIElement(divScanner.current)

            scanner.onFrameRead = results => {
                if (results.length) {
                    console.log('rrr', results);
                }
            };

            scanner.onUnduplicatedRead = (txt, result) => {
               console.log('yyy', result.barcodeFormatString + ': ' + txt);
            };
            await scanner.open()
        }

        createScanner()
    })

    return (
        <div id="scanner-container" ref={divScanner}>
            <video className="dbrScanner-video" playsInline />
        </div>
    )
}

export default Scanner
