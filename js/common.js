// TOGGLE

function openNavbar() {
  document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.top = "-100%";
  document.getElementById("main").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
document.getElementById("main").addEventListener("click", closeNavbar);