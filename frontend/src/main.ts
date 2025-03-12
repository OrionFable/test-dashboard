import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.ts";
import "./style.css";

import Dashboard from "./components/DashboardLayout.vue";
import Empty from "./components/EmptyLayout.vue";

const app = createApp(App);

app.component("DefaultLayout", Dashboard);
app.component("EmptyLayout", Empty);

app.use(router);
app.mount("#app");
