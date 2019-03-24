import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import * as serviceWorker from './serviceWorker';

let render = () => {
    ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
}

if(module.hot) {
    module.hot.accept('./app/layouts/App.tsx', () => {
        setTimeout(render)
    })
}

render();

serviceWorker.unregister();
