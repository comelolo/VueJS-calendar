import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from './plugin'
import VueRouter from 'vue-router'
import App from './app'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './styles/app.scss'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/light-bootstrap-dashboard.scss'
import './assets/css/demo.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'


import fr from './locales/fr'
import en from './locales/en'
import de from './locales/de'
import ca from './locales/ca'
import nl from './locales/nl'

import 'moment/lang/fr'
import 'moment/lang/ca'
import 'moment/lang/nl'
import * as moment from 'moment'
moment.lang('en')

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(DaySpanVuetify,
{
  data:
  {
    locales: { en, fr, de, nl, ca }
  },
  methods:
  {
    getDefaultEventColor()
    {
      return '#1976d2';
    }
  }
});

// configure router
const router = new VueRouter({
  // short for routes: routes
 linkActiveClass: 'nav-item active',
 scrollBehavior: (to) => {
   if (to.hash) {
     return {selector: to.hash}
   } else {
     return { x: 0, y: 0 }
   }
 }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
