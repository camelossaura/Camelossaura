// Camelossaura — scripts principais

document.addEventListener('DOMContentLoaded', () => {
  // ===== Menu mobile =====
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // ===== Estrelas de 4 pontas =====
  const starsContainer = document.getElementById('stars');
  if (starsContainer) {
    const colors = ['', 'yellow', 'pink', 'blue'];
    const sizes = ['', 'small', 'tiny'];
    const totalStars = 55;

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Tamanho e cor aleatórios
      const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      if (sizeClass) star.classList.add(sizeClass);
      if (colorClass) star.classList.add(colorClass);

      // Posição
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';

      // Delay da animação
      star.style.animationDelay = (Math.random() * 4) + 's';
      star.style.animationDuration = (3 + Math.random() * 3) + 's';

      starsContainer.appendChild(star);
    }
  }
});
