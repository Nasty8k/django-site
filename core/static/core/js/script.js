


// News-slider
$(document).ready(function () {
    $('.poster__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 3000,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var linkNav = document.querySelectorAll('[href^="#"]'), timeScroll = 0.4;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1');
            t = document.querySelector(hash).getBoundingClientRect().top - 200,
            start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/timeScroll, w + t) : Math.min(w + progress/timeScroll, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else { location.hash = hash }
            }
        }, false);
    }



});
