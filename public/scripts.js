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

  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.close-button');
  const modalSubmitButton = document.querySelector('.modalSubmitButton');
  const promoFormContent = document.querySelector('.promo-form-content');
  const submittedFormContent = document.querySelector('.submitted-form-content');
  let modalAlreadyShown = getModalSessionEntry();

  closeButton.addEventListener('click', toggleModal);

  window.addEventListener('click', windowOnClick);

  modalSubmitButton.addEventListener('click', toggleSubmittedFormContent);

  function createModalSessionEntry() {
    sessionStorage.setItem('modalShown', 'false');
    return false;
  }

  function getModalSessionEntry() {
    if (sessionStorage.getItem('modalShown')) return true;
    return createModalSessionEntry();
  }

  setTimeout(function () {
    if (!modalAlreadyShown) {
      toggleModal();
      sessionStorage.setItem('modalShown', 'true');
    }
  }, 1500);

  function windowOnClick(event) {
    if (event.target === modal) toggleModal();
  }

  function toggleModal() {
    modal.classList.toggle('show-modal');
  }

  function toggleSubmittedFormContent() {
    const firstName = document.forms.subscribeForm.MERGE1.value;
    const lastName = document.forms.subscribeForm.MERGE2.value;
    const email = document.forms.subscribeForm.MERGE0.value;
    if (firstName.length > 0 && lastName.length > 0 && email.length > 0) {
      submittedFormContent.classList.toggle('hidden');
      promoFormContent.classList.toggle('hidden');
      return;
    }
    return false;
  }
})();
