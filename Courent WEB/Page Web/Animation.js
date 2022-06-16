const intro = document.querySelector(".First_Slide");
const Text1 = document.querySelectorAll(".paragraphe1")
const Text2 = document.querySelector(".paragraphe2")
//END SECTION

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setPin(intro)
  .addTo(controller);

//Text Animation
const Text1Anim = TweenMax.fromTo(Text1, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})

  .setTween(Text1Anim)
  .addTo(controller);

  //Text Animation
const Text2Anim = TweenMax.fromTo(Text2, 3, { opacity: 1 }, { opacity: 0 });


let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setTween(Text2Anim)
  .addTo(controller);


