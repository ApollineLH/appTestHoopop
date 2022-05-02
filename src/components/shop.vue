<template>
  
  <div class="hello">

    <Nav/>

    <h1>Bienvenue sur Microshop</h1>

    <div>{{shopDataList}}</div>
    
  </div>
</template>

<script>
import Nav from './nav.vue';

export default {
  name: 'Shop',
  components: {
    Nav
  },
  data () {
    return {
      shopDataList:[]
    };
  },
  created(){
      fetch('products.json')
        .then(response => response.json())
        .then(data => (this.shopDataList = data), );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
