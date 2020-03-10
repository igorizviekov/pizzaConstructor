<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PZCard"
};
</script>

<style scoped>
.card {
  margin: 2%;
  padding: 2%;
  border: 1px solid black;
}
</style>
