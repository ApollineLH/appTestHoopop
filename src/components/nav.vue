<template>
    <b-navbar toggleable type="dark" variant="dark" >
        <b-navbar-brand class="mx-auto" href="/shop">Micro shop</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-button @click="gotoCart()" size="sm" class="m-2">
                <b-icon icon="cart" aria-hidden="true"></b-icon> Cart
            </b-button>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>


export default ({
    name: 'Nav',

    methods: {
        gotoCart() {
            this.$router.push('/cart');
        }
    }
});
</script>
