import LocomotiveScroll from 'locomotive-scroll';

function noScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);

function enableScroll(){
    // window.removeEventListener('scroll', noScroll);
    
    const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.6
    });
}



// setTimeout(window.removeEventListener('scroll', noScroll), 4000);

setTimeout(enableScroll, 3900);

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     multiplier: 0.6
// });


