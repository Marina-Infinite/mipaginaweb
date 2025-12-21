console.log('🔵 script.js SE ESTÁ CARGANDO');

$(document).ready(function () {
    console.log('🟢 jQuery funciona');
    console.log('📱 Ancho de pantalla:', window.innerWidth);
    
    if (window.innerWidth <= 768) {
        console.log('✅ Pantalla móvil detectada');
        
        if (!$('.featured-products').hasClass('slick-initialized')) {
            console.log('✅ Carrusel NO está inicializado aún');
            
            let initialSlide = 0;
            let fullPath = window.location.href.toLowerCase();
            let pathname = window.location.pathname.toLowerCase();
            
            console.log('🌐 URL completa:', fullPath);
            console.log('📂 Pathname:', pathname);
            
            if (fullPath.includes('verano')) {
                initialSlide = 2;
                console.log('✓ VERANO detectado - Slide: 2');
            } else if (fullPath.includes('intermedio')) {
                initialSlide = 1;
                console.log('✓ INTERMEDIO detectado - Slide: 1');
            } else if (fullPath.includes('camisolin')) {
                initialSlide = 3;
                console.log('✓ CAMISOLINES detectado - Slide: 3');
            } else if (fullPath.includes('invierno') || fullPath.includes('index')) {
                initialSlide = 0;
                console.log('✓ INVIERNO detectado - Slide: 0');
            }
            
            console.log('🎯 initialSlide FINAL:', initialSlide);
            
            $('.featured-products').slick({
                dots: false,
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                initialSlide: initialSlide
            });
            
            console.log('✅ Carrusel inicializado');
            
            $('.featured-products').on('afterChange', function (event, slick, currentSlide) {
                updateDots(currentSlide);
            });
            
            $('.dot').on('click', function () {
                let index = $(this).data('index');
                $('.featured-products').slick('slickGoTo', index);
            });
            
            updateDots(initialSlide);
        } else {
            console.log('⚠️ Carrusel YA está inicializado');
        }
    } else {
        console.log('❌ Pantalla NO es móvil (ancho:', window.innerWidth, 'px)');
    }
    
    function updateDots(index) {
        $('.dot').removeClass('active');
        $('.dot[data-index="' + index + '"]').addClass('active');
    }
});

function expandImage(box) {
    const isExpanded = box.classList.contains("expanded");
    
    // Cierra cualquier otra imagen ampliada
    document.querySelectorAll(".talle-box").forEach((el) => {
      el.classList.remove("expanded");
    });
  
    // Expande solo si no está ya expandido
    if (!isExpanded) {
      box.classList.add("expanded");
    }
}
