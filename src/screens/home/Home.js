import React, { useLayoutEffect } from "react";
import"./home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home(){
    
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        // gsap.defaults({ease: "none", duration: 2});
        // const tl = gsap.timeline();
        // tl.from(".hgc1", {yPercent: 100})
        // .from(".hgc2", {yPercent: 100})
        // .from(".hgc3", {yPercent: 100})
        // .from(".hgc4", {yPercent: 100});
        // ScrollTrigger.create({
        //     animation: tl,
        //     trigger: "#container",
        //     start: "top top",
        //     end: "+=400px", 
        //     scrub: true,
        //     pin: true,
        //     anticipatePin: 1
        //   });
        gsap.utils.toArray(".home-gallery-card").forEach((card,i)=>{
            ScrollTrigger.create({
                trigger: card,
                start:"top top",
                pin: true,
                pinSpacing: false
            })
        })
    },[])

    return(<div class="main">
    <div>
        <div>
        <h1 class="title1">Lybra Balance </h1>
        <p class=" title2-text">This beautiful USB powered lamp designed with a unique magnetic sphere switch. Use it as a calming night light for kids or adults!</p>
        <p class="title3-price">29.900€</p>
        <div>
            <button>Reserve now</button>
        </div>
        </div>
        <div>
        <img src="https://uploads-ssl.webflow.com/63ddf1b03700f08b42ad3a14/63e640a7c37df28062b25fe1_32%20(3)%20Background%20Removed-p-800.png"/>
        </div>
        </div>
        <div>
        <p class="power-text1">20000 Hour for its Lifetime</p>
        <h2 class="power-text2">Powered by the Sun</h2>
        <p  class="power-text3">The Heng Balance Lamp is the traditional lamp next door with an unconventional twist that makes it the lamp like no other, ergo it will light up your room like none of the other lamps can.</p>
        <p  class="power-text4">Works on the principle of magnetic equilibrium</p>
        <div>
        <button class="reserve-btn">Reserve now</button>
        </div>
        </div>
        <div class="home-gallery-container">
            <div class="home-gallery-card hgc1">
                <img src="./images/home_card1.jpg"/>
            </div>
            <div class="home-gallery-card hgc2">
                <img src="./images/home_card2.jpg"/>
            </div>
            <div class="home-gallery-card hgc3">
                <img src="./images/home_card3.jpg"/>
            </div>
            <div class="home-gallery-card hgc4">
                <img src="./images/home_card4.jpg"/>
            </div>
        </div>
    </div>)
}
 export default Home;