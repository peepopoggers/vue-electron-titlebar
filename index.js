import Titlebar from "./Titlebar.vue"

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("vue-electron-titlebar", Titlebar)
    }
}