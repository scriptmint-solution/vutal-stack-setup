import { createApp } from "vue"
import HelloWorld from './components/HelloWorld.vue';

const app = createApp({});
app.component('HelloWorld', HelloWorld);

app.mount("#root");