var t1 = new TimelineMax({ paused: true });

t1.to(".menu-container", 1, {
    top: 0,
    ease: Expo.easeInOut,
});

t1.staggerFrom(
    ".menu-item",
    0.6,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
);

t1.reverse();
$(document).on("click", ".menu-open", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function () {
    t1.reversed(!t1.reversed());
});