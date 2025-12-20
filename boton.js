// --- VERSIÓN ESCRITORIO (.boton) ---
document.querySelectorAll('.boton').forEach(function(button) {
    button.addEventListener('click', function(event) {
        let contenedor = this.closest('.textoycarrito');
        let modelo = contenedor.querySelector('h3').innerText;
        let talle = contenedor.querySelector('.talle-selector').value;
        let categoria = document.body.getAttribute('data-categoria');
        
        let message = `Hola, me interesa el producto ${modelo} en talle ${talle}, categoría ${categoria}`;
        let phone = '542241697504';
        
        handleLinkClick(event, `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`);
    });
});

// --- VERSIÓN MÓVIL (.boton1) CORREGIDA ---
document.querySelectorAll('.boton1').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // 1. Buscamos el contenedor correcto de móvil
        let contenedor = this.closest('.textoycarrito1');
        
        // 2. OBTENEMOS LOS DATOS (Esto es lo que faltaba o daba error)
        let modelo = contenedor.querySelector('h3').innerText;
        let talle = contenedor.querySelector('.talle-selector').value; // Ahora sí lo busca
        let categoria = document.body.getAttribute('data-categoria'); // Ahora sí lo busca
        
        let message = `Hola, me interesa el producto ${modelo} en talle ${talle}, categoría ${categoria}`;
        let phone = '542241697504'; // Asegúrate de incluir el código de país 54

        // 3. Abrir WhatsApp
        let appLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.location.href = appLink;
    });
});

// --- FUNCIONES AUXILIARES ---
function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}

// Inicialización de Select2
$(document).ready(function() {
    $('.talle-selector').select2({
        minimumResultsForSearch: Infinity,
        width: 'resolve'
    });
});
