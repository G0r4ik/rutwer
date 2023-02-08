<template>
  <AppHeader />
  <AuthWrapper />
</template>

<script>
import { AuthWrapper } from '@/features/authentication'
import AppHeader from '@/shared/components/AppHeader.vue'

export default {
  components: { AuthWrapper, AppHeader },
}
</script>
