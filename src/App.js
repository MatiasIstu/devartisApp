import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Login from './components/Login'
import Register from './components/Register'
import Homepage from './components/Homepage'
import Feed from './components/Feed'
import Articulos from './components/Articulos'
function App() {
  return (
    <Router>

        <div className="container p-4">
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/feed/:access_token" exact component={Feed} />
        <Route path="/feed/:id/articles/:access_token" exact component={Articulos} />

        </div>
        

      
    </Router>
  );
}

export default App;
