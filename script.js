fetch('https://api.countapi.xyz/hit/mehedi-portfolio/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitor-count').innerText = data.value;
  });