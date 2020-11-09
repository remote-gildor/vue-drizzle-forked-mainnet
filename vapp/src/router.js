import Vue from "vue";
import Router from "vue-router";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Buy from "./pages/Buy";

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
            path: "/profile",
            name: "profile",
            component: Profile
        },

        {
            path: "/buy",
            name: "buy",
            component: Buy
        }
    ]
});
