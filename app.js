(() => {
  'use strict';

  // Remove the JPEG's white paper background while retaining the original mark.
  // This is a client-side alpha mask: the logo artwork and lettering are not redrawn.
  async function renderLogoWithTransparency() {
    const targets = [...document.querySelectorAll('.brand-logo, .hero-logo')];
    if (!targets.length) return;
    try {
      const source = new Image();
      source.src = targets[0].getAttribute('src');
      await source.decode();
      const width = source.naturalWidth;
      const height = source.naturalHeight;
      if (!width || !height || width * height > 5000000) return;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d', {willReadFrequently:true});
      context.drawImage(source, 0, 0);
      const image = context.getImageData(0, 0, width, height);
      const data = image.data;
      const total = width * height;
      const visited = new Uint8Array(total);
      const queue = new Int32Array(total);
      let head = 0;
      let tail = 0;
      const isPaper = index => {
        const offset = index * 4;
        const red = data[offset];
        const green = data[offset + 1];
        const blue = data[offset + 2];
        return red > 218 && green > 218 && blue > 218 &&
          Math.max(red, green, blue) - Math.min(red, green, blue) < 34;
      };
      const add = index => {
        if (index < 0 || index >= total || visited[index] || !isPaper(index)) return;
        visited[index] = 1;
        queue[tail++] = index;
      };
      for (let x = 0; x < width; x++) {
        add(x);
        add((height - 1) * width + x);
      }
      for (let y = 0; y < height; y++) {
        add(y * width);
        add(y * width + width - 1);
      }
      while (head < tail) {
        const index = queue[head++];
        const x = index % width;
        if (x > 0) add(index - 1);
        if (x + 1 < width) add(index + 1);
        if (index >= width) add(index - width);
        if (index + width < total) add(index + width);
      }
      for (let n = 0; n < tail; n++) {
        const offset = queue[n] * 4;
        const luminance = 0.299 * data[offset] + 0.587 * data[offset + 1] + 0.114 * data[offset + 2];
        data[offset + 3] = Math.max(0, Math.min(255, Math.round((255 - luminance) * 8)));
      }
      context.putImageData(image, 0, 0);
      const transparentPng = canvas.toDataURL('image/png');
      targets.forEach(imageNode => {
        imageNode.src = transparentPng;
        imageNode.classList.add('logo-background-removed');
      });
    } catch (error) {
      // Keep the original mark visible if browser canvas processing is unavailable.
      targets.forEach(imageNode => imageNode.style.mixBlendMode = 'multiply');
    }
  }

  const menuButton = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuButton && mainNav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      mainNav.classList.toggle('is-open', !open);
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.catalog-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

  renderLogoWithTransparency();

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();