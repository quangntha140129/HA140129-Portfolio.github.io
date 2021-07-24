(function () {

    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    const link = document.querySelectorAll('.hover-this');
    // const cursor = document.querySelector('.cursor');
    const dp = document.querySelectorAll('.dp');
    const img = document.querySelectorAll('.imgList');
    const mnl = document.querySelectorAll('.menu-link');

    const animateit = function (e) {
        const span = this.querySelector('spann');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 30,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const animateitdp = function (e) {
        const span = this.querySelector('.dp');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 30,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const animateImg = function (e) {
        const span = this.querySelector('.imgList');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 30,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    // const editCursor = e => {
    //     const { clientX: x, clientY: y } = e;
    //     cursor.style.left = x + 'px';
    //     cursor.style.top = y + 'px';
    // };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    dp.forEach(b => b.addEventListener('mousemove', animateitdp));
    dp.forEach(b => b.addEventListener('mouseleave', animateitdp));
    img.forEach(b => b.addEventListener('mousemove', animateImg));
    img.forEach(b => b.addEventListener('mouseleave', animateImg));
    // window.addEventListener('mousemove', editCursor);

    dp.forEach((anc) => {
        anc.addEventListener("mouseover", () => {
            cursor.addClass('active8');
        });
        anc.addEventListener("mouseleave", () => {
            cursor.removeClass('active8');
        });
    });

    mnl.forEach((anc) => {
        anc.addEventListener("mouseover", () => {
            cursor.addClass('active6');
        });
        anc.addEventListener("mouseleave", () => {
            cursor.removeClass('active6');
        });
    });

    link.forEach((anc) => {
        anc.addEventListener("mouseover", () => {
            cursor.addClass('active4notext');
        });
        anc.addEventListener("mouseleave", () => {
            cursor.removeClass('active4notext');
        });
    });

    img.forEach((anc) => {
        anc.addEventListener("mouseover", () => {
            cursor.addClass('active4');
        });
        anc.addEventListener("mouseleave", () => {
            cursor.removeClass('active4');
        });
    });

})();
