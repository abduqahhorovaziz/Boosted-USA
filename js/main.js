const owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin: 20,
    dots: false,
    items: 7,
});

$('.slide__prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slide__next').click(function() {
    owl.trigger('next.owl.carousel');
})

