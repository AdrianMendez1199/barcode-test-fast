
import React from 'react';
import ReactDOM from 'react-dom';
import Scanner from './ScannerBarCode';

import * as serviceWorker from './serviceWorker'
import CameraApp from './Camera';

ReactDOM.render(
   <CameraApp />, 
  document.getElementById('root')
)

serviceWorker.register()