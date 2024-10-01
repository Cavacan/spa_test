document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const options50 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 50% が画面に見えるタイミングで発火
  };

  const options70 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7 // 70% が画面に見えるタイミングで発火
  };

  const observer50 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // 背景色のクラスを反転させる
              if (entry.target.classList.contains('white-bg')) {
                  entry.target.classList.remove('white-bg');
                  entry.target.classList.add('black-bg');
              } else if (entry.target.classList.contains('black-bg')) {
                  entry.target.classList.remove('black-bg');
                  entry.target.classList.add('white-bg');
              }

              // 水色バーのアニメーションを開始する
              const bar = entry.target.querySelector('.animated-bar');
              bar.classList.add('bar-active');
          }
      });
  }, options50);

  const observer70 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              // セクションが 70% を超えてビューポートの外に出た時に元に戻す
              if (entry.target.classList.contains('white-bg')) {
                  entry.target.classList.remove('white-bg');
                  entry.target.classList.add('black-bg');
              } else if (entry.target.classList.contains('black-bg')) {
                  entry.target.classList.remove('black-bg');
                  entry.target.classList.add('white-bg');
              }

              // 水色バーを元の位置に戻す
              const bar = entry.target.querySelector('.animated-bar');
              bar.classList.remove('bar-active');
          }
      });
  }, options70);

  sections.forEach(section => {
      observer50.observe(section);
      observer70.observe(section);
  });
});
