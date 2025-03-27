// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el botón que abre el modal (menú hamburguesa)
var menuToggle = document.querySelector('.menu-toggle');

// Obtener el <span> que cierra el modal
var closeButton = document.getElementsByClassName("close")[0];

// Verificar si los elementos existen antes de agregar eventos
if (menuToggle && modal) {
    // Cuando el usuario haga clic en el botón del menú hamburguesa, abre el modal 
    menuToggle.addEventListener('click', function() {
        modal.style.display = "block";
    });
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
if (closeButton) {
    closeButton.onclick = function() {
        modal.style.display = "none";
    };
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, también lo cierra
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

