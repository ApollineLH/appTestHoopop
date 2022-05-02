<template>
  
  <div class="hello">

    <Nav/>

    <h1>Bienvenue sur Microshop</h1>

    <div>{{shopDataList}}</div>
    
  </div>
</template>

<script>
import Nav from '../components/nav.vue';

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
      fetch("../db/products.js")
        .then(response => response.json(),console.log("res",this.response))
        .then(data => (this.shopDataList = data),console.log("data",this.shopDataList) );
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
