<template>
  <div class="container">
    <h1>Random id: {{ id }}</h1>
    <ul v-for="(item, index) in user" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Random",
  props: {
    id: {
      type: String
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
