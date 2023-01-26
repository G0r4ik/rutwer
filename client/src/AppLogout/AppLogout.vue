<template>
  <button>{{ loginOrLogout }}</button>
</template>

<script>
export default {
  computed: {
    loginOrLogout() {
      if (this.$store.getters.isAuth) return 'Выйти'
      return 'Войти'
    },
  },
}
</script>
