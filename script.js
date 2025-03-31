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
    lt.from("#nav", {           /*from mean uper se niche...*/
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    lt.to(".boundingelem", {      /* to mean niche se uper...*/
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



//charo elemnet ko select karo , uske baad charo pe mousemove lagao,jab mousemove ho tab ye pata karo ki mouse kaha par hai, jiska matalb hai ki mouse ki x and y position pata karo , mouse ki x and y position ke badle image ko show karo and usko move karo,,move karo roate karo and jaise jaise mouse tez chale wiase roation bhi tex ho jaye...
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
        var diff = dets.clientY - elem.getBoundingClientRect().top;                /*ye puri doori hai client ki - div top ki doori  and getbounding is details of div jaha pe image hai ...isme top se doori bhi dekh sakte hai getbounding karke...and detscleiny ka mean hai ki mouse ka button kaha hai height wise bro... */
        diffrot = dets.clientX - rotate; /*isme current value se - pichli value kiya hai ok...*/
        rotate = dets.clientX;      /*aur isko humne save kiya hai aise...*/
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),       
    });
});



