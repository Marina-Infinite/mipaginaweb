document.querySelectorAll('.boton').forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Obtiene el modelo
        let modelo = this.closest('.textoycarrito').querySelector('h3').innerText;
        
        // Obtiene el talle seleccionado
        let talle = this.closest('.textoycarrito').querySelector('.talle-selector').value;
        
        // Obtiene la categoría desde el atributo data del body
        let categoria = document.body.getAttribute('data-categoria');
        
        // Personaliza el mensaje
        let message = `Hola, me interesa el producto ${modelo} en talle ${talle}, categoría ${categoria}`;
        let phone = '542241697504';
        
        handleLinkClick(event, `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`);
    });
});

document.querySelectorAll('.talle-selector').forEach(function(button) {
    button.addEventListener('click', function() {
      // Si el botón ya está seleccionado, lo deseleccionamos
      if (this.classList.contains('activo')) {
        this.classList.remove('activo');
      } else {
        // Primero, removemos la clase 'activo' de todos los botones
        document.querySelectorAll('.talle-selector').forEach(function(btn) {
          btn.classList.remove('activo');
        });
        // Luego, agregamos la clase 'activo' al botón clickeado
        this.classList.add('activo');
      }
    });
});
  

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // abre whatsapp web
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}

$(document).ready(function() {
  $('.talle-selector').select2({
      minimumResultsForSearch: Infinity
  });

  // Asegurarse de reiniciar Select2
  $('.talle-selector').trigger('change'); 
});

// Selecciona todos los elementos con la clase .boton1
document.querySelectorAll('.boton1').forEach(function(button) {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Personaliza el mensaje según el modelo
      let modelo = this.closest('.textoycarrito1').querySelector('h3').innerText;
      let talle = this.closest('.textoycarrito1').querySelector('.talle-selector').value; // Obtener el valor del selector de talle
      let categoria = document.body.getAttribute('data-categoria');
      let message = `Hola, me interesa el producto ${modelo} en talle ${talle}, categoría ${categoria}`;
      let phone = '2241697504'; 

      // Construir el enlace de WhatsApp con el mensaje
      let appLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      // Abre WhatsApp directamente en la aplicación móvil
      window.location.href = appLink;
  });
});

