
var slider2 = new Swiper(".left", {
    slidesPerView: 2,
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
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        320: {
            slidesPerView: 5,
        },
    },

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
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    slidesPerView: 7.5,
    spaceBetween: 15,
        breakpoints: {
            1200:{
                slidesPerView: 6.5,
            },
            320:{
                slidesPerView: 2,
            },
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

