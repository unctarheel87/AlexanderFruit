(function () {
  // SQUEEZEBOX PLUGIN
  const squeezebox = new Squeezebox({
    wrapperEl: '.afc-accordion',
    headersClass: 'afc-accordion__header',
    foldersClass: 'afc-accordion__content',
    closeOthers: false,
    speed: '300ms',
    onOpen: function (wrapper, clickedHeader, content) {
      clickedHeader.classList.add('afc-accordion__header--open');
      clickedHeader.classList.remove('afc-accordion__header--close');
    },
    onClose: function (wrapper, clickedHeader, content) {
      clickedHeader.classList.remove('afc-accordion__header--open');
      clickedHeader.classList.add('afc-accordion__header--close');
      content.classList.remove('afc-accordion__content--open');
    },
  });
  // ensure all elements have been loaded before initializing
  // (otherwise plugin may inaccurately calculate heights)
  window.onload = function () {
    squeezebox.init();
  };
})();
