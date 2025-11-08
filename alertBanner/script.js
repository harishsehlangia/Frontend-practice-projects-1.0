const alert = document.querySelector(".alert");

// Auto hide after 3 seconds
setTimeout(() => {
    alert.classList.add("hide");
    setTimeout(() => alert.style.display = "none", 500); // Wait for fade-out
}, 3000);