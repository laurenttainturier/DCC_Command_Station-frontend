import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/fleet" component={About}/>
                <Route path="/railway" component={About}/>
                <Redirect to='/'/>
            </Switch>
        </Suspense>
    </Router>,
    document.getElementById('root'));

serviceWorker.register();
