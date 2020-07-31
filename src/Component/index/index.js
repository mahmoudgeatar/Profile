import React, {Component} from 'react';

import Home from "./../Home"
import About from "./../About"
import Portofilo from "./../Portoflio"
import Profile from "./../Profile"
import Socialmedia from "./../Socialmedia"
import Work from "./../Work"
import Footer from "./../Footer"


class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portofilo />
        <Profile />
        <About />
        <Socialmedia />
        <Footer />


      </div>
    );
   }
  }
 
export default Index;
