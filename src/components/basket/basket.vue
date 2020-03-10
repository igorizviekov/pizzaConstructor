<template>
  <v-navigation-drawer :value="drawer" absolute temporary class="cart">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Your Basket</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        Total Price:
        <strong>${{totalPrice.toFixed(1)}}</strong>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="(item, index) in order" :key="index" link>
        <v-list-item-icon>
          <v-icon>{{ item.name }}</v-icon>
        </v-list-item-icon>
        <v-btn color="red" @click="removeFromCart(item)" dark>REMOVE</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Basket",
  computed: {
    ...mapGetters(["totalPrice", "drawer", "order"])
  },
  methods: {
    ...mapMutations(["removeFromCart"])
  }
};
</script>

<style scoped>
.cart {
  position: fixed;
}
</style>
