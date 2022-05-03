<template>
<b-col>
  <b-card
    img-src= "photo"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <h4>{{ product }}</h4>
  <b-row>
      <b-col>
       
    <b-card-text>
      {{ price / 100 }}€
    </b-card-text>
      </b-col>
    <b-col>
    <b-button href="#" variant="primary" >
        <b-icon icon="cart-plus"></b-icon>
    </b-button>
    </b-col>
  </b-row>
  </b-card>
</b-col>
</template>

<script>
export default {
  props: [
    'photo', 
    'product',
    'price'
  ],
}
</script>