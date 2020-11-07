import Vue from "vue";
import Router from "vue-router";
import Main from "./pages/Main";
import Account from "./pages/Account";
import Stats from "./pages/Stats";

Vue.use(Router);

export default new Router({
    
    mode: 'history', // configure server to handle the history mode (otherwise use the 'hash' mode)

    routes: [
        {
            path: "/",
            name: "main",
            component: Main
        },

        {
            path: "/account",
            name: "account",
            component: Account
        },

        {
            path: "/stats",
            name: "stats",
            component: Stats
        }
    ]
});
