<template>
  <div class>
    <Nav />
  <h1>Votre panier</h1>
    <b-card
      border-variant="primary"
      class="overflow-hidden mt-2 mx-auto"
      style="max-width: 300px"
      v-for="product in products"
      :key="product.id"

    >
      <b-row no-gutters>
        <b-card-body :title="product.title">
          <b-card-text> {{ product.price / 100 }}€ </b-card-text>
          <b-card-text> {{ product.quantity }}/p </b-card-text>
        </b-card-body>
      </b-row>
    </b-card>

    <p>Total:{{ total / 100 }}€</p>
  </div>
</template>

<script>
import Nav from "../components/nav.vue";

export default {
  name: "Cart",
  components: {
    Nav,
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>