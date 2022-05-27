'use strict'
Vue.component('header-logo', {
  template: '<h1><a href="index.html">Home</a></h1>'
});

Vue.component('footer-header', {
  template: '<div class="footer-header"><h2><a href="index.html">logo</a></h2></div>'
});

let app = new Vue({
  el: '#app',
  data: {
    gnbMenu: [{
        name: 'company',
        ahref: 'company.html'
      },
      {
        name: 'product',
        ahref: 'product.html'
      },
      {
        name: 'gallery',
        ahref: 'gallery.html'
      },
      {
        name: 'location',
        ahref: 'location.html'
      }
    ]
  },
  components: {
    'footer-list': {
      template: '<ul><li><a href="#">list1qwer</a></li><li><a href="#">list2asdf</a></li><li><a href="#">list3zxcv</a></li></ul>'
    }
  }
});
