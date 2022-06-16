const navette = document.querySelectorAll(".navette");

window.addEventListener("load",() =>{

    const TL = gsap.timeline({paused:true});

    TL
    .from(navette, 1.5, {left:-500, ease: "power2.out"}, 0.6 );

    TL.play();
})

