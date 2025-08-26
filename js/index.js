    //alert("Welcome to the Pizza Store!");


document.addEventListener("DOMContentLoaded", function () {
  // Burger Menu Toggle
  const menuToggle = document.getElementById("CheckedBtn");
  const menu = document.querySelector(".menuSite ul");

  menuToggle.addEventListener("change", function () {
      if (this.checked) {
          menu.style.right = "0";
      } else {
          menu.style.right = "-100%";
      }
  });

  // Change Navbar Background on Scroll
  const navbar = document.querySelector(".menuSite");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      } else {
          navbar.style.backgroundColor = "transparent";
      }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: "smooth"
              });
          }
      });
  });
});
