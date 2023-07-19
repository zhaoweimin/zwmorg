import { createApp } from "vue"
import App from "./app.vue"
import zwmorg from "@zwmorg/components"

const app = createApp(App)
app.use(zwmorg)
app.mount("#app")