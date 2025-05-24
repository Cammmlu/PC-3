document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let resultado = document.getElementById("resultado");

    if (nombre === "" || email === "" || mensaje === "") {
      resultado.textContent = "Por favor completa todos los campos.";
      return;
    }

  
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      resultado.textContent = "Correo electrónico no válido.";
      return;
    }

    resultado.style.color = "green";
    resultado.textContent = "¡Mensaje enviado con éxito!";

    
    document.getElementById("formulario").reset();
  });

  const menuBtn=document.querySelector('.menu-btn')
      const navlinks=document.querySeletor('nav-links')

      menuBtn.addEventListener('click',()={
      navlinks.classList.toggle('mobile-menu')
      })
