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
})();
