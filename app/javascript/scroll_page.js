document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        console.log("observe");
        if (entry.target.classList.contains('white-bg')) {
          entry.target.classList.remove('white-bg');
          entry.target.classList.add('black-bg');
        } else if (entry.target.classList.contains('black-bg')) {
            entry.target.classList.remove('black-bg');
            entry.target.classList.add('white-bg');
        }

        const bar = entry.target.querySelector('.animated-bar');
        bar.classList.add('bar-active');
      } else {
        // スクロールアウトした時に水色バーを元に戻す
        const bar = entry.target.querySelector('.animated-bar');
        bar.classList.remove('bar-active');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
})