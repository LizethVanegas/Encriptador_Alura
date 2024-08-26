function cifrarTexto() {
  if (validacion()) {
    const textoEntrada = document.getElementById("textareaEntrada").value;
    const textoCifrado = textoEntrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    mostrarResultado(textoCifrado);
  }
}

function descifrarTexto() {
  if (validacion()) {
    const textoEntrada = document.getElementById("textareaEntrada").value;
    const textoDescifrado = textoEntrada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    mostrarResultado(textoDescifrado);
  }
}

function copiarTexto() {
  const textoCopiado = document.getElementById("textareaMostrarTexto").value;
  navigator.clipboard.writeText(textoCopiado);
  document.getElementById("textareaEntrada").value = "";
}

function limpiarTexto() {
  document.getElementById("textareaEntrada").value = "";
  document.getElementById("textareaMostrarTexto").value = "";
  document.getElementById("textareaMostrarTexto").classList.add('d-none');
  document.querySelector(".lock-image").style.display = 'block'; // Muestra el candado nuevamente
  document.querySelector(".lock-image").style.transform = 'translate(0, 0)'; // Restaurar posición original del candado
}

function validacion() {
  const textoEntrada = document.getElementById("textareaEntrada").value;

  // Permitir párrafos con espacios y múltiples líneas
  if (textoEntrada === "") {
    return true; // Permitir campo vacío sin alerta
  }

  // Regex que permite solo letras minúsculas y espacios
  const validacion = /^[a-z\s]+$/g.test(textoEntrada);

  if (!validacion) {
    alert("No se aceptan mayúsculas ni caracteres especiales.");
    return false;
  }
  return true;
}

function mostrarResultado(texto) {
  const iconContainer = document.querySelector(".lock-image");
  const textareaMostrarTexto = document.getElementById("textareaMostrarTexto");
  
  iconContainer.style.display = "none"; // Oculta el candado
  textareaMostrarTexto.classList.remove('d-none'); // Muestra la caja de texto
  textareaMostrarTexto.value = texto;
}

document.querySelectorAll('.fantasy-btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.7)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
});

// Detecta cambios en tiempo real mientras se escribe en el textarea
document.getElementById("textareaEntrada").addEventListener('input', function () {
  validacion();
});

document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('custom_cursor');
  
  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });
});


const specialChars = ['☥', '⚚', '⛧', 'ॐ', '⚛', '☯', '♁', '⌖', '☡', '⚔', '☭', '✠', '☽', '⚒'];

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  document.getElementById('particle-container').appendChild(particle);

  let charIndex = Math.floor(Math.random() * specialChars.length);
  particle.textContent = specialChars[charIndex];

  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.animationDuration = 2 + Math.random() * 4 + 's';
  particle.style.opacity = Math.random();

  const intervalId = setInterval(() => {
    charIndex = Math.floor(Math.random() * specialChars.length);
    particle.textContent = specialChars[charIndex];
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    particle.remove();
  }, 6000);
}

setInterval(createParticle, 75);
