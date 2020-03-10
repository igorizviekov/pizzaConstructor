import Login from "./components/form/PZLogin.vue";
import Register from "./components/form/PZRegister.vue";
import PZMain from "./components/PZMain.vue";
export const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/main", component: PZMain, props: true }
];
