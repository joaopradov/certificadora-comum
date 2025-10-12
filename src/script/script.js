document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links a")

function highlightNavigation() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.style.color = "#333"
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.style.color = "#3B82F6"
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightNavigation)

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".lesson-card, .team-card, .module")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  const moduleHeaders = document.querySelectorAll(".module-header")

  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"

      this.setAttribute("aria-expanded", !isExpanded)
    })
  })
})

const ctaButton = document.querySelector(".cta-button")
if (ctaButton) {
  ctaButton.addEventListener("click", function (e) {
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 150)
  })
}

console.log(
  "%c🚀 Bem-vindo ao Curso de Programação Web Front-End!",
  "color: #3B82F6; font-size: 20px; font-weight: bold;",
)
console.log("%cEste site foi desenvolvido com HTML, CSS e JavaScript puro.", "color: #6b7280; font-size: 14px;")
