import React from 'react';
import ReactDome from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import '../style'
ReactDome.render(
            <>
            <BrowserRouter>
                <App />
            </BrowserRouter>
                
            </>
,document.getElementById('root')
);