import React from "react";
import Profit from "../components/profit/Profit";
import Simple from "../components/simple/Simple";
import Welcome from "../components/welcome/Welcome";
import Slideshow from 'react-slidez'

function Slide() {
  return ( 
  <Slideshow>
    <Welcome />
    <Simple />
    <Profit />
  </Slideshow>
  )
};
 export default Slide