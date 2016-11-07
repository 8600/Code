"use strict";
import Vue from 'vue';
import Vue_Router from 'vue-router';

import routerMap from './routers.js';
import App from './App.vue';

Vue.use(Vue_Router);

const router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true
});

// 独立出来的路由
routerMap(router);

router.start(App, '#app');