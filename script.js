function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function closeMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("show");
}

document.getElementById("year").innerHTML = new Date().getFullYear();
