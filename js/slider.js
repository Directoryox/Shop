var swiper = new Swiper(".swiper", { // создаем переменную, и указываем на библиотеку и указываем на класс, указываем с документации стрелочки классов и там где число с объекта я хз
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination", // указываем на точки о том сколько слайдов ваще 
},
    mousewheel: false, // стрелочки истинна
    keyboard: true, // клава истинна
});

