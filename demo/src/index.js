import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'sanitize.css';
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
