<template>
  <b-col>
    <b-card
      :img-src="photo"
      img-top
      tag="article"
      style="width: 15rem"
      class="m-auto mb-3"
    >
      <h4>{{ product }}</h4>
      <hr class="my-4">
      <b-row align-v="center">
        <b-col>
          <b-card-text> {{ price / 100 }}€ </b-card-text>
        </b-col>
        <b-col>
          <b-button @click="addToCart()" variant="primary">
            <b-icon icon="cart-plus"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["photo", "product", "price"],
  methods: {
    addToCart() {},
  },
};
</script>
<style scoped>
</style>