document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-button");

    colorButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const colorClass = button.classList[1]; // Assumes the color class is the second class
            document.body.classList.remove(
                "bg-red-500",
                "bg-blue-500",
                "bg-green-500",
                "bg-yellow-500",
                "bg-purple-500",
                "bg-teal-500"
            );
            document.body.classList.add(colorClass);
        });
    });
});

const loadingNumber = document.querySelector("#loadingNumber");
const loadingCircle = document.querySelector(".loading-circle");
let load = 0;

setInterval(updateLoader, 150);

function updateLoader() {
    load += load < 100;
    loadingNumber.innerHTML = load;
    loadingCircle.style.background =
        "conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) " +
        load +
        "%, #101012 " +
        load +
        "%)";
}
const loadingDuration = 2000; // 2s

setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);


// backtop start
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}
// backtop end
// DARK MODE

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../assets/images/light.svg";
  } else {
    this.firstElementChild.src = "../assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

// NAVBAR SHRINK
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

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
