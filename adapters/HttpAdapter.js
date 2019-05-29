/**
 * Adapter over vue http resource
 *
 * It encapsulates logic in the class to give wrapped interface for our application
 * You can easily replace it with different http client, jquery Ajax for example
 * **/

import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)

export default {
    /**
     *
     * @param {string} url
     * @param {object} options
     * @param {function} successCallback
     * @param {function} errorCallback
     *
     * @return {void}
     */
    get(url, options = {}, successCallback, errorCallback) {
        Vue.http.get(url, options).then(successCallback, errorCallback)
    },

    /**
     *
     * @param {string} url
     * @param {object} options
     * @param {function} successCallback
     * @param {function} errorCallback
     *
     * @return {void}
     */
    post(url, options, successCallback, errorCallback) {
        Vue.http.post(url, options).then(successCallback, errorCallback)
    },

    /**
     *
     * @param {string} url
     * @param {object} options
     * @param {function} successCallback
     * @param {function} errorCallback
     *
     * @return {void}
     */
    put(url, options, successCallback, errorCallback) {
        Vue.http.put(url, options).then(successCallback, errorCallback)
    },

    /**
     *
     * @param {string} url
     * @param {object} options
     * @param {function} successCallback
     * @param {function} errorCallback
     *
     * @return {void}
     */
    delete(url, options, successCallback, errorCallback) {
        Vue.http.delete(url, {
            body: options
        }).then(successCallback, errorCallback)
    }
}
