<template>
  <div class="container">
    <h1>Choose your pizza</h1>
    <div class="cart">
      <v-btn color="blue" dark @click="toggle">{{counter}}</v-btn>
    </div>
    <ul v-for="(item, index) in pizza" :key="index"></ul>
    <div class="grid">
      <section v-for="(card, index) in pizza" :key="index">
        <p-z-card>
          <ul>
            <li v-for="(item, key, id) in card.data" :key="id">
              <span>
                <strong>{{ key }}:</strong>
                {{ item }}
              </span>
            </li>
          </ul>
          <extras
            :id="index"
            :itemPrice="card.data.price"
            :extra="card.extra"
            :extra2="card.extra2"
            :extra3="card.extra3"
            :addExtra="addExtra"
            :addExtra2="addExtra2"
            :addExtra3="addExtra3"
          />
          <img :src="card.url" alt />
          <br />
          <v-btn class="mr-4" @click="addToCart(card.data)">ADD</v-btn>
        </p-z-card>
      </section>
    </div>
    <hr />
    <v-btn color="blue" dark @click="toggleCustom">CREATE CUSTOM</v-btn>
    <custom v-if="showCustom" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PZCard from "./pizza/PZCard.vue";
import Extras from "./pizza/Extras.vue";
import Custom from "./PZCustom.vue";
export default {
  name: "PZMain",
  components: {
    PZCard,
    Extras,
    Custom
  },
  props: {
    id: {
      type: String
    }
  },

  data() {
    return {
      showCustom: false,
      pizza: [
        {
          data: {
            name: "Crudo",
            price: 1,
            crust: "Wood-fired",
            topping: "Provolone"
          },
          extra: {
            name: "Cheese",
            price: 0.5
          },
          extra2: {
            name: "Onions",
            price: 0.2
          },
          extra3: {
            name: "Olives",
            price: 0.5
          },
          url:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
          data: {
            name: "Napoli",
            price: 2,
            crust: "Regular",
            topping: "Swiss Cheese"
          },
          extra: {
            name: "Cheese",
            price: 0.5
          },
          extra2: {
            name: "Tomatoes",
            price: 0.5
          },
          extra3: {
            name: "Garlic",
            price: 0.1
          },
          url:
            "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
        },
        {
          data: {
            name: "Pesto",
            price: 3,
            crust: "Neapolitan",
            topping: "Green Olives"
          },
          extra: {
            name: "Cheese",
            price: 0.5
          },
          extra2: {
            name: "Mushrooms",
            price: 0.5
          },
          extra3: {
            name: "Eggs",
            price: 0.3
          },
          url:
            "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["addToCart", "toggle"]),
    toggleCustom() {
      this.showCustom = !this.showCustom;
    },
    addExtra(extraPrice, itemPrice, id) {
      this.pizza[id].data.price = itemPrice + extraPrice;
    },
    addExtra2(extraPrice, itemPrice, id) {
      this.pizza[id].data.price = itemPrice + extraPrice;
    },
    addExtra3(extraPrice, itemPrice, id) {
      this.pizza[id].data.price = itemPrice + extraPrice;
    }
  },
  computed: { ...mapGetters(["counter"]) }
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}
.cart {
  width: 85%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 700;
}
li {
  text-transform: capitalize;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
}
img {
  width: 100%;
}
</style>
