<template>
  <div>
    <h4>Add Extras:</h4>
    <section>
      <p>{{extra.name}}</p>
      <v-btn class="mr-1" @click="addExtra(extra.price, itemPrice, id)">+</v-btn>
    </section>
    <section>
      <p>{{extra2.name}}</p>
      <v-btn class="mr-1" @click="addExtra(extra2.price, itemPrice, id)">+</v-btn>
    </section>
    <section>
      <p>{{extra3.name}}</p>
      <v-btn class="mr-1" @click="addExtra(extra3.price, itemPrice, id)">+</v-btn>
    </section>
  </div>
</template>

<script>
export default {
  name: "Basket",
  computed: {},
  props: {
    extra: {
      type: Object
    },
    extra2: {
      type: Object
    },
    extra3: {
      type: Object
    },
    itemPrice: {
      type: Number
    },
    id: {
      type: Number
    },
    addExtra: {
      type: Function
    }
  },

  // ["extra", "extra2", "extra3", "addExtra", "itemPrice", "id"],
  methods: {}
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  margin: 3% 0;
}
section p {
  text-align: left;
}
</style>
