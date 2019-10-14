Vue.component('Product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `<div id="app" class="product">
              <div class="product-image">
                <img v-bind:src="image"/>
              </div>
              <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost Out Stock</p>
                <p v-if="inventory === 0" :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <p v-if="isSale">On Sale</p>

                <ul>
                  <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(varian, index) in varians"
                  :key="varian.id"
                  class="color-box"
                  :style="{backgroundColor: varian.color }"
                  @mouseover="updateProduct(index)" >
                </div>

                <button v-on:click="onAddToCartClick()"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }">Add to Cart</button>

                <a v-bind:href="link">More boots here!</a>
              </div>
            </div>`,
  data() {
    return {
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
    }
  },
  methods: {
    onAddToCartClick: function() {
      this.$emit('add-to-cart', this.varians[this.selectedVariant].id);
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
    },
    shipping() {
      return this.premium  ? 'Free' : '2.99';
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});