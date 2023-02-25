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
                end:"+=3000px",
                pinSpacing: false
            })
        })
    },[])

    const lineImage=[
        {img:"./images/line-product1.jpg"},
        {img:"./images/line-product2.jpg"},
        {img:"./images/line-product3.jpg"},
        {img:"./images/line-product4.jpg"}
    ]

    return(
    <div class="main">
        <div>
    <div class="home-container">
        <div class="home-item1">
        <h1 class="title1">Lybra Balance </h1>
        <p class=" title2-text">This beautiful USB powered lamp designed with a unique magnetic sphere switch. Use it as a calming night light for kids or adults!</p>
        <p class="title3-price">29.900€</p>
        <div class="reserve-item">
            <button class="reserve-btn">Reserve now</button>
        </div>
        </div>
        <div class="home-img1-item">
        <img src="./images/zan-design-img.png" class="home-img1"/>
        </div>
    </div>
    <div class="life-time-wrapper">
        <p class="power-text1">20000 Hour for its Lifetime</p>
        <h2 class="power-text2">Powered by the Sun</h2>
        <p  class="power-text3">The Heng Balance Lamp is the traditional lamp next door with an unconventional twist that makes it the lamp like no other, ergo it will light up your room like none of the other lamps can.</p>
        <p  class="power-text4">Works on the principle of magnetic equilibrium</p>
        <div>
        <button class="reserve-btn1">Reserve now</button>
        </div>
     </div>
     </div>
     <div class="zan-design-video">
     <div class="z-d-video">
     <video autoPlay loop style={{"background-image":"./images/home_video_back.png",height: "100%", width: "100%",objectFit: "fill","border-radius": "10px"}} muted playsInline data-wf-ignore="true" data-object-fit="fill">
        <source src="./videos/zan-design-videos.mp4" data-wf-ignore="true"/>
     </video>
     </div>
     <div class="z-d-txt">
      <p class="zan-design-text">If you want to add some ambient lighting to your room, this lamp is a must.</p>

     </div>
     </div>
     <div class="pro-lamp-wrapper">
          <img src="./images/heng-pro-lamp.png" class="heng-pro-img"/>
          <button  class="explore1 explore-btn">EXPLORE</button>
        <button class="explore2 explore-btn">EXPLORE</button>
         <button class="explore3 explore-btn">EXPLORE</button>
       </div>
       {/* <div class="home-gallery-container">
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
        </div> */}
     <div class="line-of-products">
      <p class="heading-detail-small">LINE OF PRODUCTS</p>
      <h3 class="h3-heading">Our Plethora of Product<br/>Just for YOU</h3>
      <div class="line-of-products-img">
       {lineImage.map((item)=>{
        return<div class="line-img-item">
            {<img src={item.img} class="line-img"/>}
        </div>
       })}
      </div>
     </div>
    </div>)
}
 export default Home;