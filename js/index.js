require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';
import Gameboard from './components/gameboard';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Gameboard />, document.getElementById('app'))
);