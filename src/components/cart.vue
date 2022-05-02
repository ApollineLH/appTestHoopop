<template>
    <div>
        <Nav/>
        <p>cart</p>
    </div>
</template>

<script>
import Nav from './nav.vue';

export default {
  name: 'Cart',
  components: {
    Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>