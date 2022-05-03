<template>
    <div>
        <Nav/>
      <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p  class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="notification is-success">
        <b-button class="delete"></b-button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold"></span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
    <b-button  class="button is-info">
      Checkout (<span class="has-text-weight-bold"></span>)
    </b-button>
     
 <b-button class="button is-danger is-outlined" >
    <span>Delete All items</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </b-button>
       </div>
  </div>
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