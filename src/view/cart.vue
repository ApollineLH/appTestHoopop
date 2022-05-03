<template>
    <div>
        <Nav/>
        <p>cart</p>
        <Footer/>
    </div>
</template>

<script>
import Nav from '../components/nav.vue';
import Footer from '../components/footer.vue';

export default {
  name: 'Cart',
  components: {
    Nav, Footer
  },

}
</script>