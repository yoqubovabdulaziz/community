// LOADING

const loading = document.getElementById("loading");

const loadingDuration = 4400; // 2s
// const loadingDuration = 1; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
