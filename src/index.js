
import React from 'react';
import ReactDOM from 'react-dom';
import Scanner from './ScannerBarCode';

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
   <Scanner />, 
  document.getElementById('root')
)

serviceWorker.register()