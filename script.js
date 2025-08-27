function swapSkyTexture(url) {
  const skySphere = document.querySelector("a-sky");
  skySphere.setAttribute("src", url);
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    document
      .querySelectorAll(".btn")
      .forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    const url = btn.getAttribute("data-url");
    swapSkyTexture(url);

    // Add a subtle bounce animation
    btn.style.animation = "none";
    setTimeout(() => {
      btn.style.animation = "bounce 0.5s";
    }, 10);
  });
});

// Set the first button as active by default
document.querySelector(".btn").classList.add("active");

// Add animation keyframes
const style = document.createElement("style");
style.innerHTML = `
  @keyframes bounce {
    0%, 100% { transform: translateY(-8px) scale(1.05); }
    50% { transform: translateY(-15px) scale(1.1); }
  }
`;
document.head.appendChild(style);
