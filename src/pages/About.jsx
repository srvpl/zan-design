import React from "react";
// import { Navbar } from "../components/Navbar";
import zen_poster from "../images/zen_poster.png";
import "../pages/About.css";
import zanwen from "../images/zanwen.png";
import Card from "../components/card"
import achievements from '../images/achievements.png'
import red_d from '../images/red_d.png'
import Design from '../images/Design.png'
import Golden from '../images/Golden.png'
import prodeez from '../images/prodeez.png'
import notey from '../images/notey.png'
import yd from '../images/yd.png'
import dame from '../images/dame.png'
import raknew from '../images/raknew.png'
import muse from '../images/muse.png'
import reddot from '../images/reddot.png'
import a_d from '../images/a_d.png'
import geek from '../images/geek.png'

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <img className="poster" src={zen_poster} alt="banner" />
      </div>
      <div>
        <h1 className="about-txt">About US</h1>
      </div>
      <div>
        <img className="zanwen" src={zanwen} alt="zanwen" />
      </div>
      <div>
        <h1 className="name">李赞文 |Zanwen li</h1>
      </div>
      <div>
        <h1 className="details" >
          ZAN DESIGN is built on the philosophy of 'good design may not
          necessarily change life, but bad design will definitely destroy the
          fun of your life' We keep exploring the boundary of design,
          considering that a Good design should not only focus on the function,
          but also the way to present your concept of design and lifestyle.
          Design works won more than 100+ international awards, products are
          sold globally.
        </h1>
      </div>
      <h1 className="featured">Featured</h1>
      <div>
        <Card/>
      </div>
      <div>
        <div className="company">
         <div> <img src={red_d} alt="red_d"/></div>
         <div> <img src={Design} alt="design"/></div>
         <div> <img src={Golden} alt="golden"/></div>
         <div> <img src={prodeez} alt="prodeez"/></div>  
        </div>
        <div className="company">
         <div> <img src={notey} alt="notey"/></div>
         <div> <img src={yd} alt="yd"/></div>
         <div> <img src={dame} alt="dame"/></div>
         <div> <img src={raknew} alt="raknew"/></div>  
        </div>
        <div className="company3">
         <div> <img src={muse} alt="muse"/></div>
         <div> <img src={reddot} alt="reddot"/></div>
         <div> <img src={a_d} alt="a_d"/></div>
         <div> <img src={geek} alt="geek"/></div>  
        </div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img style={{ width: '90%' }} src={achievements} alt="achievements"/>
      </div>
    </div>
    
  );
};

export default About;
