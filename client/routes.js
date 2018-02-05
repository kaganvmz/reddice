import React from 'react';
import NavigationBar from './components/NavigationBar';

import { BrowserRouter, Route} from 'react-router-dom';

import Greetings from "./components/Home";
import SignupPage from "./components/SignupPage";

export default () => (
    <BrowserRouter>
        <div>
            <NavigationBar />
            <Route exact path='/' component={Greetings} />
            <Route exact path='/signup' component={SignupPage} />
        </div>
    </BrowserRouter>
)