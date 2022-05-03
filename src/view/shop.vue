<template>
  
  <div class="hello">

    <Nav/>

    <h1 class="mb-4 mt-2">Bienvenue sur Microshop</h1>
   <b-row>
       <Cards v-for='item in shopDataList' :key='item.productId' :product='item.productName' :photo='item.productPicture'  :price="item.productPrice"></Cards>
    </b-row>

    <Footer/>
    
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import Cards from '../components/cards.vue';
import Json from '../db/products.json';
import Footer from '../components/footer.vue';


export default {
  name: 'Shop',
  components: {
    Nav,
    Cards,
    Footer
  },
  data () {
    return {
      shopDataList: Json
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


</style>
