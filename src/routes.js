import Login from "./components/form/PZLogin.vue";
import Register from "./components/form/PZRegister.vue";
import Random from "./components/PZRandom.vue";
export const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/:id", component: Random, props: true }
];
