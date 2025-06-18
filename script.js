// Visitor Counter
fetch('https://api.countapi.xyz/hit/mehedi-portfolio-adv/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitor-count').innerText = data.value;
  });

// Optional: Add sticky header effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.style.background = "#111";
  } else {
    header.style.background = "#222";
  }
});
