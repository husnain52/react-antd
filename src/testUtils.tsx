import { render as RTL } from '@testing-library/react'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux-toolkit/store';
import { Provider } from 'react-redux';

export const matchMedia = window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

export const render = (component:any, option={}) => {
    return RTL(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    {component}
                </Provider>
            </Router>
        </React.StrictMode>,
        option
    )
}