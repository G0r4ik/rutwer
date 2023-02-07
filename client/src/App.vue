<script>
import PageAuthentication from './pages/PageAuthentication.vue'
import PageMain from './pages/PageMain.vue'
import { useAuthStore } from './features/authentication/index'
export default {
  components: { PageAuthentication, PageMain },
  data() {
    return {
      tokenCheck: false,
    }
  },
  async mounted() {
    await useAuthStore().checkAuthToken()
    this.tokenCheck = true
  },
  computed: {
    currentGlobalComponent() {
      return useAuthStore().token ? 'PageMain' : 'PageAuthentication'
    },
  },
}
</script>

<template>
  <component v-if="tokenCheck" :is="currentGlobalComponent"></component>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: normal !important;
}
</style>
