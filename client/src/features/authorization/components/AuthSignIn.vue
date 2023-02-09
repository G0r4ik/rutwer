<template>
  <small class="mb-1 d-inline-block text-danger">{{ serverError }}</small>
  <input
    class="sign-in__login form-control"
    :class="{ 'border-danger': error.login }"
    placeholder="Login"
    type="text"
    v-model="login"
    @input="checkLogin"
  />
  <small class="sign-in__login-error text-danger fs-6 mb-2 d-inline-block">
    {{ error.login }}
  </small>

  <input
    v-model="password"
    class="sign-in__password form-control"
    :class="{ 'border-danger': error.password }"
    placeholder="Password"
    type="password"
    @input="checkPassword"
  />
  <small class="sign-in__login-error text-danger fs-6 mb-2 d-inline-block">
    {{ error.password }}
  </small>

  <button
    class="auth__button btn btn-primary mt-2 d-block"
    @click.prevent="signIn"
    :disabled="!isValidData"
  >
    Войти
  </button>
</template>

<script>
import api from '../api'
import {
  checkLoginV,
  checkPasswordV,
  isValidDataV,
} from '../helpers/validator.js'
import { useAuthStore } from '../store'
export default {
  data() {
    return {
      login: '',
      password: '',
      error: { login: '', password: '' },
      serverError: '',
    }
  },

  computed: {
    isValidData() {
      return isValidDataV(this.error)
    },
  },

  methods: {
    checkLogin() {
      this.error.login = checkLoginV(this.login)
    },
    checkPassword() {
      this.error.password = checkPasswordV(this.password)
    },
    async signIn() {
      this.checkLogin()
      this.checkPassword()

      if (this.isValidData) {
        const res = await api.loginUser(this.login, this.password)
        if (res.error) {
          this.serverError = res.error.message
        } else {
          useAuthStore().setAuthToken(res.token)
          useAuthStore().setUser(res.user)
        }
      }
    },
  },
}
</script>
