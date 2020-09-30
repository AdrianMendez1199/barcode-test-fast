import React, { useEffect } from 'react'
import Dynamsoft from 'dynamsoft-javascript-barcode'

const Scanner = () => {
  let scanner = null
  useEffect(() => {
    Dynamsoft.BarcodeScanner.createInstance({
      UIElement: document.getElementById('scanner-container'),
      //   onFrameRead: (results) => {},
      onUnduplicatedRead: ((txt, result) => {
        console.log('text', txt)
        console.log('result', result)
      }),
    }).then((s) => {
      scanner = s

      scanner.show().catch((ex) => {
        console.log(ex)
        alert('ex.message || ex')
        scanner.hide()
      })
    })
  })

  return (
    <div id="scanner-container">
      <video className="dbrScanner-video" playsInline />
    </div>
  )
}

export default Scanner
