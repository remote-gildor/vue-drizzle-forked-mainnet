import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from '@/App.vue';
import Main from '@/pages/Main.vue';
import { expect } from 'chai';
import createStore from "./helpers/storeHelper.js";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

const routes = [{ path: '/', component: Main }];

const router = new VueRouter({
  routes
});

describe('Main.vue (drizzle initialized)', () => {
  let wrapper;
  const store = createStore(true); // true for drizzle

  beforeEach(() => {
    wrapper = shallowMount(Main, {
      localVue,
      router,
      store
    });
  });

  it('renders', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('shows the text that only appears when Drizzle is initialized (meaning MetaMask is connected)', () => {
    expect(wrapper.text()).to.include("Buy DAI");
  });
});

describe('App.vue (drizzle NOT initialized)', () => {
  let wrapper;
  const store = createStore(false); // false for drizzle

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      router,
      store
    });
  });

  it('renders', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('shows the "Loading" text which means the MetaMask is not successfully connected', () => {
    expect(wrapper.text()).to.include("Loading");
  });
});
