/*This is example app.js, some code parts has been deleted*/

require('./scripts/bootstrap')
require('./scripts/polyfills.js')
require('./scripts/bootstrap-datetimepicker')
require('./scripts/bootstrap-select')
require('./scripts/jquery.datatables')
require('./scripts/bootstrap-checkbox-radio-switch-tags')
require('./scripts/jquery.easypiechart.min')
require('./scripts/chartist.min')
require('./scripts/bootstrap-notify')
require('./scripts/sweetalert2')
require('./scripts/jquery-jvectormap')
require('./scripts/jquery.bootstrap.wizard.min')
require('./scripts/bootstrap-table')
require('./scripts/fullcalendar.min')
require('./scripts/demo')
require('../../../node_modules/sweetalert2/dist/sweetalert2.min')
require('parsleyjs')
require('./classes/LinkParser.js')

/*This is example app.js, some code parts has been deleted*/

import Vue from 'vue'
import Resource from 'vue-resource'
import PortalVue from 'portal-vue'
import Modal from './components/common/utilities/Modal.vue'

Vue.use(Resource)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

const VueInputMask = require('vue-inputmask').default
Vue.use(VueInputMask)

import VeeValidate from 'vee-validate'
import Dictionary from './dictionary'
Vue.use(VeeValidate)
VeeValidate.Validator.localize('en', Dictionary.en)

import store from './store/index' //import vuex
import VTooltip from 'v-tooltip'
import VModal from 'vue-js-modal'
import preloaderPopup from './components/common/preloader-popup.vue'
import Vtabs from './components/Vtabs.vue'
import Toastr from 'vue-toastr'
require('vue-toastr/src/vue-toastr.scss')

var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

/*This is example app.js, some code parts has been deleted*/

Vue.component('preloader-popup', preloaderPopup)
Vue.component('v-tabs', Vtabs)
Vue.component('car-error-modal', require('./components/common/carErrorModal.vue'))
Vue.component('a-select', require('./components/common/a-select.vue'))
Vue.component('information-page', require('./components/information/Information.vue'))
Vue.component('footer-element', require('./components/footer-element.vue'))
Vue.component('nav-button', require('./components/navButton.vue'))
Vue.component('meetAlert', require('./components/start/MeetingForm.vue'))
Vue.component('unit-checkbox', require('./components/common/unitCheckbox.vue'))
Vue.component('checkbox-group', require('./components/common/checkboxGroup.vue'))
Vue.component('circular-progress-bar', require('./components/common/circularProgressBar.vue'))
Vue.component('u-radio', require('./components/common/uRadio.vue'))
Vue.component('Datepicker', require('./components/common/Datepicker'))
Vue.component('error-alert', require('./components/common/errorAlert.vue'))
Vue.component('edit-btn', require('./components/common/utilities/crud/EditBtn.vue'))
Vue.component('store-btn', require('./components/common/utilities/crud/StoreBtn.vue'))
Vue.component('delete-btn', require('./components/common/utilities/crud/DeleteBtn.vue'))
Vue.component('util-modal', Modal)

import 'babel-polyfill'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.use(Resource)
Vue.use(VeeValidate)
Vue.use(VTooltip)
Vue.use(VModal)
Vue.use(Toastr)
Vue.use(PortalVue)

/*This is example app.js, some code parts has been deleted*/

export const eventHub = new Vue()
export const vm = new Vue()

const app = new Vue({
    el: '#app',
    store
})
