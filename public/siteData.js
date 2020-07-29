Vue.component('afc-nav', {
  data: function () {
    return {
      item1: 'How it works',
      item2: 'About',
      item3: 'Choose your package',
    };
  },
  template:
    '<header class="afc-header"><a href="index.html"><img class="afc-header__logo" src="images/icons/Primarylogo@4x.png"></a><nav class="afc-nav"><ul><li class="afc-nav__menu-item"><a href="how-it-works.html">{{ item1 }}</a></li><li class="afc-nav__menu-item"><a href="about.html">{{ item2 }}</a></li><li class="afc-nav__cta-btn"><a class="afc-button" href="choose-your-package.html">{{ item3 }}</button></a></li></ul><button id="mobile-nav-trigger" class="afc-nav__mobilenav-trigger"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0z" fill="none" /> <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" /></svg></button></nav></header>',
});

Vue.component('afc-mobile-nav', {
  data: function () {
    return {
      item1: 'How it works',
      item2: 'About',
      item3: 'Choose your package',
    };
  },
  template:
    '<div id="mobile-nav" class="afc-mobile-nav"><div class="afc-mobile-nav__header"><a href="index.html"><img class="afc-mobile-nav__logo" src="images/icons/Secondarylogo@4x.png"></a><button id="mobilenav-close-btn" class="afc-mobile-nav__close-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> <path d="M0 0h24v24H0z" fill="none" /> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /> </svg> </button> </div> <nav> <ul> <li class="afc-mobile-nav__menu-item"><a href="how-it-works.html">{{ item1 }}</a></li><li class="afc-mobile-nav__menu-item"><a href="about.html">{{ item2 }}</a></li><li class="afc-mobile-nav__menu-item afc-mobile-nav__menu-item--cta"><a href="choose-your-package.html">{{ item3 }}</a></li></ul></nav></div>',
});

Vue.component('afc-footer', {
  data: function () {
    return {
      items: {
        item1: {
          header: 'Customer Service',
          links: ['Terms and conditions', 'Privacy policy', 'Contact us'],
        },
        item2: {
          header: 'Our company',
          links: ['About', 'How it works', 'Choose your package'],
        },
        item3: {
          header: "Let's be friends",
          message:
            'Follow us for recipe videos, tips from Ned, and weekly produce sneak peeks.',
        },
      },
    };
  },
  template:
    '<footer class="afc-footer"> <div class="afc-footer__items"> <div class="afc-container"> <div class="afc-footer__item"> <h5>{{ items.item1.header }}</h5> <ul> <li><a href="https://www.websitepolicies.com/policies/view/gPsv6NmW" target="_blank">{{ items.item1.items[0] }}</a></li> <li><a href="https://www.websitepolicies.com/policies/view/ETHrCIqp" target="_blank">{{ items.item1.items[1] }}</a></li> <li><a href="mailto:hello@alexanderfruit.com">{{ items.item1.items[2] }}</a></li> </ul> </div> <div class="afc-footer__item"> <h5>{{ items.item2.header }}</h5> <ul> <li><a href="about.html">{{ items.item2.items[0] }}</a></li> <li><a href="how-it-works.html">{{ items.item2.items[1] }}</a></li> <li><a href="choose-your-package.html">{{ items.item2.items[2] }}</a></li> </ul> </div> <div class="afc-footer__item"> <h5>{{ items.item3.header }}</h5> <p>{{ items.item3.message }}</p> <ul class="afc-footer__social-links"> <li><a href="https://www.instagram.com/alexanderfruit/" target="_blank"><img class="afc-social-icon" src="images/icons/instagram.png"></a></li> <li><a href="https://www.facebook.com/TheAlexanderFruitCompany" target="_blank"><img class="afc-social-icon" src="images/icons/facebook.png"></a></li> </ul> </div> </div> </div> <div class="afc-footer__footer"> <div class="afc-container"> Web design and development by <a href="https://www.kristentillman.com" target="_blank">Rinnova Creative</a> </div> </div> </footer>',
});

const afcApp = new Vue({
  el: '.afc',
  data: {
    message: 'Hello Vue!',
  },
});
