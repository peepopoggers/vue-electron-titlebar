<template>
    <div>
        <titlebar class="titlebar" :title="'Test application'" :ico="'dev/kirk2.png'">
        </titlebar>
        <h1>Ein Test</h1>
    </div>
</template>

<script>
import Titlebar from '../Titlebar.vue'

export default {
    components: {
        Titlebar
    }
}
</script>

<style>
body {
    --vue-electron-titlebar-color: blue;
    --vue-electron-titlebar-background-color: orange;
    --vue-electron-titlebar-height:30px;
    --vue-electron-titlebar-button-hover-color: yellow;
}
</style> 

