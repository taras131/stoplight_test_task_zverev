import Vue from 'vue'
import Router from 'vue-router'
import Red from "../pages/Red";
import Yellow from "../pages/Yellow";
import Green from "../pages/Green";
import {ROUTE_GREEN, ROUTE_RED, ROUTE_YELLOW} from "../const";
Vue.use(Router)


export default new Router({
  mode: "history",
  routes: [
    {
      path: ROUTE_RED,
      name: 'Red',
      component: Red
    },
    {
      path: ROUTE_YELLOW,
      name: 'Yellow',
      component: Yellow
    },
    {
      path: ROUTE_GREEN,
      name: 'Green',
      component: Green
    },
    { path: '/', redirect: ROUTE_RED }
  ]
})
