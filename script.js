document.addEventListener('DOMContentLoaded', function() {
    
  const message = document.getElementById('birthday-message');
  const text = '¡Feliz Cumpleaños Mami!';
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      // Reemplazar el contenido en lugar de agregar
      message.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      dropMessage();
    }
  }

  function dropMessage() {
    let position = -100;
    const finalPosition = 30; // Aumentado de 20 a 30
    const interval = setInterval(function() {
      if (position >= finalPosition) {
        clearInterval(interval);
        message.style.top = finalPosition + 'px';
      } else {
        position += 5;
        message.style.top = position + 'px';
      }
    }, 20);
  }

  message.style.opacity = '1';
  // Limpiar el contenido inicial antes de comenzar a escribir
  message.textContent = '';
  typeWriter();

  // Selecciona el botón
  const button = document.querySelector('.aprete-button');

  // Agrega un evento de clic al botón
  button.addEventListener('click', function() {
    window.location.href = 'index1.html'; // Reemplaza con el nombre del archivo HTML
  });
});