(function () {
  // VARIABLE DECLARATION
  const mobileNavTrigger = document.getElementById('mobile-nav-trigger');
  const mobileNav = document.getElementById('mobile-nav');

  const mobileNavCloseBtn = document.getElementById('mobilenav-close-btn');

  const mobileNavStyles = window.getComputedStyle(mobileNav);

  // LISTENERS
  mobileNavTrigger.addEventListener('click', onMobileClick);
  mobileNavCloseBtn.addEventListener('click', onMobileClick);
  document.body.addEventListener('click', onOutsideMobileNavClick);

  // FUNCTION DECLARATIONS
  function onMobileClick() {
    mobileNav.classList.toggle('afc-mobile-nav--open');
  }

  function onOutsideMobileNavClick(e) {
    if (e.target !== mobileNavTrigger && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('afc-mobile-nav--open');
    }
  }

  // INTERSECTION OBSERVER
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector('.afc-packages');
  console.log(target);
  observer.observe(target);

  function callback(entries, observer) {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  }
})();
