var app = new Vue({
  el: '#app',
  data: {
    branch: 'Vue Mastery',
    product: 'Boots',
    selectedVariant: 0,
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inventory: 0,
    isSale: true,
    details: ['80% cotton', '20% polyster', 'Gender-neutral'],
    varians: [{
      id: 123,
      color: 'green',
      image: './assets/vmSocks-green.jpg',
      quantity: 10,
    }, {
      id: 234,
      color: 'blue',
      image: './assets/vmSocks-blue.jpg',
      quantity: 0
    }],
    cart: 0
  },
  methods: {
    onAddToCartClick: function() {
      this.cart++;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.branch + ' ' + this.product;
    },
    image() {
      return this.varians[this.selectedVariant].image;
    },
    inStock() {
      return this.varians[this.selectedVariant].quantity;
    }
  }
});