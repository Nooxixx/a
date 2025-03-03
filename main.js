// Función para cambiar el contenido de un elemento HTML
function changeContent() {
    document.getElementById("content").innerHTML = "¡El contenido ha cambiado!";
}

// Agregar un evento de clic al botón
document.getElementById("changeButton").addEventListener("click", changeContent);