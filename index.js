import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Projects from './components/Projects';
import Resume from './components/Resume';


ReactDOM.render((
  <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
   </div>
 </BrowserRouter>),
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
