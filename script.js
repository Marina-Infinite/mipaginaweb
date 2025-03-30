$(document).ready(function() {
    // Solo aplicar el carrusel en pantallas pequeñas
    if (window.innerWidth <= 768) {
        // Verifica si el carrusel ya fue inicializado
        if (!$('.featured-products').hasClass('slick-initialized')) {
            $('.featured-products').slick({
                dots: true, // Agrega puntos de navegación
                infinite: false, // Desactiva el loop, no se podrá deslizar más allá del cuarto producto
                speed: 300, // Velocidad de transición
                slidesToShow: 1, // Número de productos que se muestran en cada slide
                slidesToScroll: 1, // Número de productos que se desplazan a la vez
                arrows: false, // Desactiva las flechas de navegación
            });
        }
    }
});












