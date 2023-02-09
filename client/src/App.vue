<script>
import Pageauthorization from './pages/Pageauthorization.vue'
import PageMain from './pages/PageMain.vue'
import { useAuthStore } from './features/authorization/index'
export default {
  components: { Pageauthorization, PageMain },
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
      return useAuthStore().token && useAuthStore().user
        ? 'PageMain'
        : 'Pageauthorization'
    },
  },
}
</script>

<template>
  <component v-if="tokenCheck" :is="currentGlobalComponent"></component>
</template>
