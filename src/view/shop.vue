<template>
  
  <div class="hello">

    <Nav/>

    <h1>Bienvenue sur Microshop</h1>

    <div>{{shopDataList}}</div>
    
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import Json from '../db/products.json';


export default {
  name: 'Shop',
  components: {
    Nav
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
