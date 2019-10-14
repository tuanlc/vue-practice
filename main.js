var app = new Vue({
  el: '#app',
  data: {
    branch: 'Vue Mastery',
    product: 'Boots',
    image: './assets/vmSocks-green.jpg',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inventory: 0,
    isSale: true,
    details: ['80% cotton', '20% polyster', 'Gender-neutral'],
    varians: [{
      id: 123,
      color: 'green',
      image: './assets/vmSocks-green.jpg'
    }, {
      id: 234,
      color: 'blue',
      image: './assets/vmSocks-blue.jpg'
    }],
    cart: 0,
    inStock: false
  },
  methods: {
    onAddToCartClick: function() {
      this.cart++;
    },
    changeColor: function(image) {
      this.image = image;
    }
  },
  computed: {
    title() {
      return this.branch + ' ' + this.product;
    }
  }
});