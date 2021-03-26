import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "../shared/header.jsx";


window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header/>, document.getElementById('root'));
})


