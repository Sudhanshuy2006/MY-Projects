const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// function circlemousemove (){
//     window.addEventListener('mousemove',function(dets){
//     document.querySelector("#minicircle").style.transform = `translate(${dets.clientsX}px, ${dets.clientsY}px)`
//     })
// }
// circlemousemove();

function firstpageaim() {
    var lt = gsap.timeline();
    lt.from("#nav", {           
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    lt.to(".boundingelem", {      
        y: 0,
        duration: 1.5,
        delay: -1,
        stagger: .2,
        ease: Expo.easeInOut
    })
    lt.from(".herofooter", {
        y: -10,
        opacity: 0,
        delay: -1,
        duration: 2,
        ease: Expo.easeInOut
    })
}

firstpageaim();

var timeout;
function chipmouseshort() {
    // define default scale value...
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)      /* it is maping...*/
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)     /*it is the location of mouse...*/
        xprev = dets.clientX;      /*it is the location of mouse...*/
        yprev = dets.clientY;

        timeout = setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1))`;
        }, 100);
        // console.log(diifx, diify);
        circlemousemove(xscale, yscale)

    });
};

chipmouseshort();

function circlemousemove(xscale, yscale) {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
};
circlemousemove();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;               
        diffrot = dets.clientX - rotate; 
        rotate = dets.clientX;      
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),       
    });
});



