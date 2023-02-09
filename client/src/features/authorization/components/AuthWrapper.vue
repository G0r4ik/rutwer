<template>
  <div
    class="auth position-absolute top-50 start-50 translate-middle rounded-3 px-4 py-4 w-500 shadow"
  >
    <h2 class="auth_title mb-3">{{ action }}</h2>
    <form class="mb-1">
      <AuthSignIn v-if="authComponent === 'login'" />
      <AuthSignUp v-if="authComponent === 'register'" />
    </form>
    <span
      class="auth_change-component fs-6 border-bottom"
      @click="changeAuthComponent"
    >
      {{ reverseAction }}
    </span>
  </div>
</template>
<script>
import AuthSignUp from './AuthSignUp.vue'
import AuthSignIn from './AuthSignIn.vue'

export default {
  components: { AuthSignUp, AuthSignIn },
  data() {
    return {
      error: '',
      authComponent: 'login',
    }
  },
  computed: {
    action() {
      return this.authComponent === 'login' ? 'Войти' : 'Регистрация'
    },
    reverseAction() {
      return this.authComponent === 'login' ? 'Регистрация' : 'Войти'
    },
  },

  methods: {
    changeAuthComponent() {
      this.authComponent = this.authComponent === 'login' ? 'register' : 'login'
    },
  },
}
</script>
<style>
.auth {
  width: 100%;
  max-width: 700px;
}
.auth_change-component {
  cursor: pointer;
}
</style>
