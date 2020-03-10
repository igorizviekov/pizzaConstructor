<template>
  <div class="Container">
    <h2>Create your custom pizza</h2>
    <br />
    <p-z-card>
      <h3>Total price: ${{total}}</h3>
      <hr />
      <v-radio-group v-model="order.crust">
        <v-radio label="Plain Crust" :value="'Plain Crust'" @change="plainCrust" />
        <v-radio label="Thin Crust" :value="'Thin Crust'" @change="thinCrust" />
      </v-radio-group>
      <v-row justify="space-around">
        <v-checkbox label="Cheese" v-model="checkbox.cheese" class="mx-2" @click="addCheese" />
        <v-checkbox label="Salad" v-model="checkbox.salad" class="mx-2" @click="addSalad" />
        <v-checkbox label="Ketchup" v-model="checkbox.ketchup" class="mx-2" @click="addKetchup" />
      </v-row>
      <section>
        <div class="Option">
          <v-btn class="mr-4" @click="removeOnions" :disabled="classes.onion.disabled">-</v-btn>
          <h4>Onions</h4>
          <v-btn class="mr-4" @click="addOnions">+</v-btn>
        </div>
        <div class="Option">
          <v-btn class="mr-4" @click="removeMushrooms" :disabled="classes.mushrooms.disabled">-</v-btn>
          <h4>Mushrooms</h4>
          <v-btn class="mr-4" @click="addMushrooms">+</v-btn>
        </div>
        <div class="Option">
          <v-btn class="mr-4" @click="removeTomato" :disabled="classes.tomatoes.disabled">-</v-btn>
          <h4>Tomatoes</h4>
          <v-btn class="mr-4" @click="addTomato">+</v-btn>
        </div>
        <div class="Option">
          <v-btn class="mr-4" @click="removeBacon" :disabled="classes.bacon.disabled">-</v-btn>
          <h4>Bacon</h4>
          <v-btn class="mr-4" @click="addBacon">+</v-btn>
        </div>
        <v-btn color="blue" dark @click="addToCart(order)">ADD TO CART</v-btn>
      </section>
    </p-z-card>
  </div>
</template>

<script>
import PZCard from "./pizza/PZCard.vue";
import { mapMutations } from "vuex";
export default {
  name: "Custom",
  components: {
    PZCard
  },
  data() {
    return {
      order: {
        name: "Custom",
        price: 0.5,
        mushrooms: 0,
        onion: 0,
        bacon: 0,
        tomatoes: 0,
        crust: "Plain Crust",
        cheese: false,
        salad: false,
        ketchup: false
      },
      checkbox: {
        cheese: false,
        salad: false,
        ketchup: false
      },
      price: {
        saladPrice: 0.1,
        ketchupPrice: 0.1,
        cheesePrice: 0.2,
        mushPrice: 0.5,
        onionPrice: 0.2,
        baconPrice: 0.7,
        tomatoPrice: 0.5
      },
      classes: {
        onion: {
          disabled: true
        },
        mushrooms: {
          disabled: true
        },
        tomatoes: {
          disabled: true
        },
        bacon: {
          disabled: true
        }
      }
    };
  },
  computed: {
    total() {
      return this.order.price.toFixed(1);
    }
  },
  methods: {
    ...mapMutations(["addToCart"]),
    thinCrust() {
      this.order.crust = "Thin Crust";
      this.order.price = this.order.price + 0.7;
    },
    plainCrust() {
      this.order.crust = "Plain Crust";
      this.order.price = this.order.price - 0.7;
    },
    addCheese() {
      if (this.order.cheese) {
        this.order.cheese = false;
        this.order.price = this.order.price - this.price.cheesePrice;
      } else {
        this.order.cheese = true;
        this.order.price = this.order.price + this.price.cheesePrice;
      }
    },
    addSalad() {
      if (this.order.salad) {
        this.order.salad = false;
        this.order.price = this.order.price - this.price.saladPrice;
      } else {
        this.order.salad = true;
        this.order.price = this.order.price + this.price.saladPrice;
      }
    },
    addKetchup() {
      if (this.order.ketchup) {
        this.order.ketchup = false;
        this.order.price = this.order.price - this.price.ketchupPrice;
      } else {
        this.order.ketchup = true;
        this.order.price = this.order.price + this.price.ketchupPrice;
      }
    },
    addOnions() {
      this.classes.onion.disabled = false;
      this.order.onion += 1;
      this.order.price = this.order.price + this.price.onionPrice;
    },
    addMushrooms() {
      this.classes.mushrooms.disabled = false;
      this.order.mushrooms += 1;
      this.order.price = this.order.price + this.price.mushPrice;
    },
    addBacon() {
      this.classes.bacon.disabled = false;
      this.order.bacon += 1;
      this.order.price = this.order.price + this.price.baconPrice;
    },
    addTomato() {
      this.classes.tomatoes.disabled = false;
      this.order.tomatoes += 1;
      this.order.price = this.order.price + this.price.tomatoPrice;
    },
    removeOnions() {
      if (this.order.onion === 1) {
        this.classes.onion.disabled = true;
      }
      this.order.onion -= 1;
      this.order.price = this.order.price - this.price.onionPrice;
    },
    removeMushrooms() {
      if (this.order.mushrooms === 1) {
        this.classes.mushrooms.disabled = true;
      }
      this.order.mushrooms -= 1;
      this.order.price = this.order.price - this.price.mushPrice;
    },
    removeBacon() {
      if (this.order.bacon === 1) {
        this.classes.bacon.disabled = true;
      }
      this.order.bacon -= 1;
      this.order.price = this.order.price - this.price.baconPrice;
    },
    removeTomato() {
      if (this.order.tomatoes === 1) {
        this.classes.tomatoes.disabled = true;
      }
      this.order.tomatoes -= 1;
      this.order.price = this.order.price - this.price.tomatoPrice;
    }
  }
};
</script>

<style scoped>
.Container {
  text-align: center;
}
.Option {
  width: 50%;
  margin: 2% auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
