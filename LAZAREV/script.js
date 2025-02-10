function navAnimation()
{
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    // console.log("Hello");
    //Whenever the mouse will enter we will write gsap code
    let tl = gsap.timeline()
   tl.to(".nav-bottom", {
        height: "21vh"
    })
    tl.to(".nav-part2 h5", {
        display: "block"
    })
// From is to make the things come out
    tl.to(".nav-part2 h5 span", {
        y: 0,//Where are they on screen before showing up
       // stagger : 0.1,
        //duration:0.7//Time they are taking to come out
        // All the elements will uplift one by one. More stagger value means more time to uplift
        stagger:{
            amount:0.8
            // It's the speed by which the elements come out
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
 
// It will go down in screen like before with to
    tl.to(".nav-part2 h5 span", {
        y: 20,
        stagger:{
            amount:0.8
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration:0.7
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration:0.3
    })
})
}

navAnimation()