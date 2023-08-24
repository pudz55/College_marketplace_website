import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import 'jquery-validation';
//initializing the jquery
window.$ = window.jQuery = $;
//load custom jq.js file before react is initialized
$.getScript('/js/jq.js', function () {
    console.log('jq.js loaded');
    ReactDOM.createRoot(document.getElementById('app'))
        .render(<React.StrictMode>
            <App/>
        </React.StrictMode>);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
