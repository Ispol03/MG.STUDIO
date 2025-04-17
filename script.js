/**
 * MG.STUDIO - Script principal
 * Este archivo contiene todas las funcionalidades JavaScript del sitio web
 */

// ===== ELEMENTOS DOM =====
const header = document.getElementById("header")
const menuToggle = document.querySelector(".menu-toggle")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

// ===== EVENT LISTENERS =====

// Eventos de scroll
window.addEventListener("scroll", handleScroll)

// Eventos del menú móvil
if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu)
}

// Cerrar menú al hacer clic en un enlace
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMenu)
})

/**
 * Maneja el efecto de scroll en el header
 * Añade una clase cuando el usuario hace scroll para cambiar su apariencia
 */
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }
}

/**
 * Alterna la visibilidad del menú móvil
 * Controla las clases CSS para mostrar/ocultar el menú y bloquear el scroll
 */
function toggleMenu() {
  header.classList.toggle("menu-open")
  document.body.classList.toggle("no-scroll")
}

/**
 * Cierra el menú móvil
 * Elimina las clases que muestran el menú y desbloquea el scroll
 */
function closeMenu() {
  header.classList.remove("menu-open")
  document.body.classList.remove("no-scroll")
}

/**
 * Implementa scroll suave al hacer clic en enlaces de navegación
 * @param {Event} e - Evento de clic
 */
function smoothScroll(e) {
  e.preventDefault()

  const targetId = this.getAttribute("href")
  const targetElement = document.querySelector(targetId)

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    })

    // Si estamos en móvil, cerrar el menú después de hacer clic
    if (window.innerWidth < 768) {
      closeMenu()
    }
  }
}

// Scroll suave para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll)
})

// ===== INICIALIZACIÓN =====

// Inicializar el estado del header al cargar la página
handleScroll()
