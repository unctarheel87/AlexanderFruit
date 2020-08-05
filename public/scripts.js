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
    threshold: 0.01,
  };

  let observer = new IntersectionObserver(observerCb, options);

  let container = document.querySelector('.page-container');
  let targets = container.querySelectorAll(
    '.page-container > section, .page-container > div'
  );
  // targets[0].classList.add('afc-hide-block-text');
  console.log(targets);

  Array.prototype.forEach.call(targets, function (target) {
    observer.observe(target);
  });

  function observerCb(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('afc-animate--in');
      } else {
        if (entry.target.classList.contains('afc-animate--in')) {
          entry.target.classList.remove('afc-animate--in');
        }
      }
    });
  }
})();
