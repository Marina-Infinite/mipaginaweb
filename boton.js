// Selecciona todos los elementos con la clase .boton
document.querySelectorAll('.boton').forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Puedes personalizar el mensaje según el modelo
        let modelo = this.closest('.textoycarrito').querySelector('h3').innerText;
        let message = `Hola, me interesa el producto ${modelo}`;
        let phone = '542241697504';
        
        handleLinkClick(event, `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`);
    });
});

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // abre whatsapp web
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}

// Selecciona todos los elementos con la clase .boton1
document.querySelectorAll('.boton1').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Personaliza el mensaje según el modelo
        let modelo = this.closest('.textoycarrito1').querySelector('h3').innerText;
        let message = `Hola, me interesa el producto ${modelo}`;
        let phone = '2241697504'; // Asegúrate de que el número esté en el formato internacional sin el '+' inicial

        // Construir el enlace de WhatsApp con el mensaje
        let appLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Abre WhatsApp directamente en la aplicación móvil
        window.location.href = appLink;
    });
});


