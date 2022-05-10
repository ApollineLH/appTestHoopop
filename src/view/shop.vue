<template>
  
  <div class="body">

    <Nav/>

   <b-row class="mt-5" align-v="center">
      <b-col v-for='product in products' :key='product.productId' >
        <b-card
          :img-src="product.productPicture"
          img-top
          tag="article"
          style="width: 15rem"
          class="m-auto mb-3"
        >
          <h4>{{ product.productName }}</h4>
          <hr class="my-4">
          <b-row align-v="center">
            <b-col>
              <b-card-text> {{ product.productPrice / 100 }}€ </b-card-text>
            </b-col>
            <b-col>
              <b-button @click="addProductToCart(product)" variant="primary">
                <b-icon icon="cart-plus"></b-icon>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      
    </b-row>

    <Footer/>
    
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import Footer from '../components/footer.vue';


export default {
  name: 'Shop',
  components: {
    Nav,
    Footer
  },
  computed: {
    products() {
      return this.$store.getters.productsStore;
    }
  },
  methods: {
    addProductToCart(product) {
     
      this.$store.dispatch('addProductToCart', product);
    },
  },
  created () {
   this.$store.dispatch('fetchProducts');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}


</style>
