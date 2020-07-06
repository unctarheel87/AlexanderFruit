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
    },
  });
  squeezebox.init();
})();