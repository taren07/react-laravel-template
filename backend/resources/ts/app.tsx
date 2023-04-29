import React from 'react';
import ReactDOM from 'react-dom';
import {
    UserRoutes,
} from './router'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import { Login } from '../ts/Pages/User/Login'

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Switcher />
        </BrowserRouter>
    )
};

const Switcher: React.FC = () => {
    return (
        <UserRoutes />
    )

}

if (document.getElementById('app')) {
    const container = document.getElementById('app');
    const root = createRoot(container!); // createRoot(container!) if you use TypeScript
    root.render(<App />);
}