gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  smoothMobile: true,
  multiplier: 0.6
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// Animation

// const vw = (coef) => window.innerWidth * (coef / 100)
// const vh = (coef) => window.innerHeight * (coef / 100)
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

// console.log(vw(50))

gsap.to(".trans-img1", {
  scrollTrigger: {
    trigger: ".trans-img1",
    scroller: ".smooth-scroll",
    scrub: true,
    // pin: true,
    start: "center center",
    // end: "top -52.0833vw"
  },
  y: vw(50),
  ease: "none"
});

// var skewSetter = gsap.quickSetter(".skew1", "skewY", "deg");
// var proxy = { skew: 0 }

// ScrollTrigger.create({
//   onUpdate: self => {
//     var skew = self.getVelocity() / 1500;
//     // console.log(skew)
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       // console.log(proxy)
//       gsap.to(proxy, { skew: 0, duration: 1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) })
//     }
//   }
// });

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();