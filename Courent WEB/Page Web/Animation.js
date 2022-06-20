const intro = document.querySelector(".First_Slide");
const Text1 = document.querySelectorAll(".paragraphe1");
const Text2 = document.querySelector(".paragraphe2");
const slide2 = document.querySelector(".Second_Slide");
const ThirdSlide = document.querySelector("Third_Slide");
//END SECTION

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
const controllerThird = new ScrollMagic.Controller();
//Scenes
let scene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setPin(intro)
  .addTo(controller);



//Scene 2
let scene_SLIDE2 = new ScrollMagic.Scene({
  duration: 600,
  triggerElement: slide2,
  triggerHook: 0
})
  .setPin(slide2)
  .addTo(controller2);




  