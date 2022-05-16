
var slider2 = new Swiper(".left", {
    slidesPerView: 4,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    loop: true,
});
var slider1 = new Swiper(".right", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
});
var swiper3 = new Swiper(".offers", {
    slidesPerView: 7.5,
    spaceBetween: 15,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
    },
    loop: true,
});
var swiper3 = new Swiper(".popular", {
    slidesPerView: 2,
    spaceBetween: 15,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next4",
        prevEl: ".prev4",
    },
    loop: true,
});

