new Swiper ('.left',{
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})


$('.right').slick({

});

$('.offers').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true
});
$('.popular').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
});
