<template>
  <div
    class="auth position-absolute top-50 start-50 translate-middle rounded-3 px-4 py-4 w-500 shadow"
  >
    <h2 class="auth_title mb-3">{{ action }}</h2>
    <small class="mb-1 d-inline-block text-danger">{{ error }}</small>
    <form class="auth__from mb-1">
      <AuthSignIn v-if="authComponent === 'login'" @login="login" />
      <AuthSignUp v-if="authComponent === 'register'" @register="register" />
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
import { useAuthStore } from '../store'
import AuthSignUp from './AuthSignUp.vue'
import AuthSignIn from './AuthSignIn.vue'
import api from '../api'

export default {
  components: { AuthSignUp, AuthSignIn },
  data() {
    return {
      error: '',
      authComponent: 'login',
      auth: useAuthStore(),
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
    async register(login, password, email) {
      const res = await api.registerUser(login, password, email)
      if (res.error) return (this.error = res.error)
      useAuthStore().setAuthToken(res.data.token)
      useAuthStore().setUser(res.data.user)
    },
    async login(login, password) {
      const res = await api.loginUser(login, password)
      if (res.error) return (this.error = res.error)
      useAuthStore().setAuthToken(res.data.token)
      useAuthStore().setUser(res.data.user)
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
