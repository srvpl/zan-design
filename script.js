/** @format */
const lineImage=[
  {img:"./images/line-product1.jpg"},
  {img:"./images/line-product2.jpg"},
  {img:"./images/line-product3.jpg"},
  {img:"./images/line-product4.jpg"}
]

gsap.registerPlugin(ScrollTrigger);
gsap.to(".home-sun",{
  scrollTrigger:{
    trigger:".navbar",
    start:"top top",
    endTrigger:".life-time-wrapper",
    end:"bottom bottom",
    toggleActions:"restart none reverse reset",
    scrub: true,
  },
  x: window.innerWidth-500,
  y: document.querySelector(".sun-space").offsetWidth-400,
  scale:2.5,
  opacity:0.7,
  duration:5
})
gsap.to(".home-right-box",{
  scrollTrigger:{
    trigger:".navbar",
    start:"top top",
    toggleActions:"restart none reverse reset",
    scrub: true,
  },
  rotationY: -35,
  duration:4
})
gsap.to(".home-img1-item",{
  scrollTrigger:{
    trigger:".navbar",
    start:"top top",
    toggleActions:"restart none reverse reset",
    scrub: true,
  },
  x: -100,
  duration:4
})
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".navbar",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});
gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});

const hoverpen1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-content",
    start: "top 10%",
    pin: true,
    scrub: 2,
  },
})

hoverpen1Timeline
  .set(".hoverpen1, .hoverpen2", { position: 'absolute' })
  .from(".hoverpen1 .animation-block", {scale: 0.2, opacity: 0, xPercent: 75, duration: 5})
  .from(".hoverpen1 .top-wrapper img", { left: "4rem", duration: 4 }, "<")
  .from(".hoverpen1 .top-wrapper .title-group", { right: "-25rem", duration: 4 }, "<")
  .from(".hoverpen1 .description-wrapper", { yPercent: "22%", duration:4 }, "<")
  .to(".hoverpen1 .animation-block", {scale: 1.2, opacity: 0, duration: 3})

  .fromTo(".hoverpen2 .animation-block",
    {scale: 0.2, opacity: 0, xPercent: 30},
    {scale: 1, opacity: 1, xPercent: 60,  duration: 5},
    "<"
  )
  .from(".hoverpen2 .top-wrapper img", { left: "4rem", duration: 4 }, "<")
  .from(".hoverpen2 .top-wrapper .title-group", { right: "-25rem", duration: 4 }, "<")
  .from(".hoverpen2 .description-wrapper", { bottom: "0%", duration: 4 }, "<")
  .to(".hoverpen2 .animation-block", {scale: 1.2, opacity: 0, xPercent: 80, duration: 3})

  .from(".hoverpen3 .animation-block", {scale: 0.2, opacity: 0, xPercent: 70, duration: 5}, "<")
  .from(".hoverpen3 .top-wrapper img", { left: "4rem", duration: 4 }, "<")
  .from(".hoverpen3 .top-wrapper .title-group", { right: "-35rem", duration: 4 }, "<")
  .from(".hoverpen3 .description-wrapper", { bottom: "-35%", duration: 4 }, "<")
  .to(".hoverpen3 .animation-block", {scale: 1.2, opacity: 0, duration: 3})

  
gsap.utils.toArray(".home-section").forEach((container, i) => {
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    pin: true,
    pinSpacing: false,
    // snap: 1,
  });
  gsap.from(container.children, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse reset",
    },
  });
});

var lineOfPdts = document.getElementById("home-line-pdts")
lineOfPdts.innerHTML = lineImage.map(item=>{
  return `<div class="line-img-item">
            <img src=${item.img} class="line-img"/>
          </div>`
        }).join('')


