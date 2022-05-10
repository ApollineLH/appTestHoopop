//store.js
import Vue from "vue";
import Vuex from "vuex";
import shop from "../api/shopList.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters:{
    productsStore(state){
        return state.products;
    },
    cartProducts(state){
        return state.cart.map(cartItem => {
            const product = state.products.find(product => product.productId === cartItem.id);
            return {
                title: product.productName,
                price: product.productPrice,
                quantity: cartItem.quantity,
                image: product.productPicture

            }   
        })
    },
    cartTotal(state,getters){
        let total =0 
        getters.cartProducts.forEach(product => {
            total += product.price * product.quantity
        })
        return total
    }

  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve();
        });
      });
    },
    addProductToCart(context, product) {
        const cartItem= context.state.cart.find(item=>item.id===product.productId);
      if (!cartItem) {
       context.commit("pushProductToCart", product.productId);
      } else {
        context.commit("incrementCartItemQuantity", cartItem);
      }
    },
    incrementCartItemQuantity({ commit }, cartItem) {
        commit("incrementCartItemQuantity", cartItem);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, productId) {
        console.log('from vueX',productId)
        state.cart.push({
            id: productId,
            quantity: 1
        });
  },
    incrementCartItemQuantity(state, cartItem) {
        cartItem.quantity++;
    }
    
}
});
