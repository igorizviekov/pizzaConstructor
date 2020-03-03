<template>
  <div class="container">
    <h1>Create New Account</h1>
    <v-form class="form">
      <v-text-field label="First name" class="input" v-model="user.name" />
      <v-text-field label="Last name" class="input" v-model="user.lastName" />
      <v-text-field
        label="Age"
        class="input"
        type="number"
        v-model="user.age"
      />
      <v-text-field
        label="Email"
        class="input"
        type="email"
        v-model="user.email"
        hint="email@example.com"
      />
      <v-text-field
        v-model="user.password"
        class="input"
        type="password"
        label="Password"
        hint="At least 8 characters"
        counter
      ></v-text-field>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "PZREgister",
  data() {
    return {
      user: { name: "", lastName: "", age: "", email: "", password: "" }
    };
  },
  methods: {
    submit() {
      this.$store.state.user.push(this.user);
      this.$router.push("/1");
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}

.form {
  margin: 5%;
  padding: 5% 2%;
  border: 1px solid black;
}

.input {
  padding: 2%;
  width: 80%;
  margin: auto;
}
</style>
