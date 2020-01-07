import Vue from 'vue';
import App from './App';

const app = new Vue({
    // router: Routes,
    render: h => h(App)
}).$mount('#spa');


export default app;
