<template>
  <button class="btn btn-primary" @click="logout()">Выйти</button>
</template>

<script>
import { useAuthStore } from '../store'

export default {
  methods: {
    logout() {
      useAuthStore().logout()
    },
  },
}
</script>
