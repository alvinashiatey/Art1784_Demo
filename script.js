function swapSkyTexture(url) {
  const skySphere = document.querySelector('a-sky');
  skySphere.setAttribute('src', url);
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-url');
    swapSkyTexture(url);
  });
});
