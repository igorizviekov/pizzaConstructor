import Vue from "vue";
import VueX from "vuex";
Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    user: [],
    basket: [],
    drawer: null,
    total: 0
  },
  getters: {
    counter: state => {
      return state.basket.length;
    },
    totalPrice: state => {
      return state.total;
    },
    drawer: state => {
      return state.drawer;
    },
    order: state => {
      return state.basket;
    }
  },
  mutations: {
    addToCart(state, order) {
      state.basket.push(order);
      state.total = state.total + order.price;
    },
    removeFromCart(state, item) {
      const i = state.basket.map(item => item.name).indexOf(item.name);
      state.basket.splice(i, 1);
      state.total = state.total - item.price;
    },
    toggle: (state, val) => {
      state.drawer = val;
    }
  }
});
