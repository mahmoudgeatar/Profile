import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom"
import Navbar from "./Component/Navbar"

import Contact from "./Component/Contact"

import Index from "./Component/index"

 





class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/Contact" component={Contact} />

      </BrowserRouter>
    );
   }
  }
 
export default App;
