// 点点滴滴 · 交互脚本：移动端菜单 + 画廊灯箱
(function () {
  // 移动端导航
  const burger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // 画廊灯箱
  const lb = document.getElementById('lightbox');
  if (lb) {
    const ph = lb.querySelector('.ph');
    const title = lb.querySelector('h3');
    const desc = lb.querySelector('p');
    document.querySelectorAll('.frame').forEach(f => {
      f.addEventListener('click', () => {
        ph.className = 'ph ' + (f.dataset.tint || 't-peach');
        ph.textContent = f.dataset.emoji || '🎨';
        title.textContent = f.dataset.title || '作品';
        desc.textContent = f.dataset.desc || '这是一张占位图，替换成真实作品即可。';
        lb.classList.add('open');
      });
    });
    lb.querySelector('.close').addEventListener('click', () => lb.classList.remove('open'));
    lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }
})();
