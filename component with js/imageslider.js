const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // or 'vertical' if you want vertical direction
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});
