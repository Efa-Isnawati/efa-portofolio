window.onscroll = function () {
  myFunction();
};
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init();
});
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
document.getElementById("btnSwitch").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");

  if (currentTheme == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    document
      .getElementById("navbar")
      .classList.remove("navbar-dark", "bg-dark");
    document.getElementById("navbar").classList.add("navbar-light", "bg-light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document
      .getElementById("navbar")
      .classList.remove("navbar-light", "bg-light");
    document.getElementById("navbar").classList.add("navbar-dark", "bg-dark");
  }
});
