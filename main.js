var app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    image: './assets/vmSocks-green.jpg',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inventory: 8,
    isSale: true,
    details: ['80% cotton', '20% polyster', 'Gender-neutral'],
    varians: [{
      id: 123,
      color: 'green'
    }, {
      id: 234,
      color: 'blue'
    }]
  }
});