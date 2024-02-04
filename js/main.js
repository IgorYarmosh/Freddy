$('.single-item').slick({
    infinite: true,
    dots: true,
    speed: 900,
    slidesToShow: 1,
    variableWidth: true
    // slidesToScroll: 1
});

let number = document.querySelector('.number'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end =+number.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
        number.innerHTML = ++start;
        if(start == end) {
            clearInterval(interval);
        }
    }, 35);
    };
});

let number2 = document.querySelector('.number2'),
    numberTop2 = number.getBoundingClientRect().top,
    start2 = +number.innerHTML, end2 =+number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop2 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
    var interval2 = setInterval(function () {
        number2.innerHTML = ++start2;
        if(start2 == end2) {
            clearInterval(interval2);
        }
    }, 35);
    };
});

let number3 = document.querySelector('.number3'),
    numberTop3 = number3.getBoundingClientRect().top,
    start3 = +number3.innerHTML, end3 =+number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop3 - window.innerHeight) {
        this.removeEventListener('scroll', onScroll);
    var interval3 = setInterval(function () {
        number3.innerHTML = ++start3;
        if(start3 == end3) {
            clearInterval(interval3);
        }
    }, 5);
    };
});

let number4 = document.querySelector('.number4'),
    numberTop4 = number4.getBoundingClientRect().top,
    start4 = +number4.innerHTML, end4 =+number4.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop4 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
    var interval4 = setInterval(function () {
        number4.innerHTML = ++start4;
        if(start4 == end4) {
            clearInterval(interval4);
        }
    }, 0);
    };
});

new WOW({
    animateClass: 'animate__animated'
}).init();

let button = document.getElementById('rectangle-btn');
let video = document.getElementById('video');

button.onclick = function () {
    video.play();
    video.controls = 'true';
    // video.setAttribute("controls", "controls");
    button.style.display = 'none';
}






