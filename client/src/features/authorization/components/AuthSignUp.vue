<template>
  <small class="mb-1 d-inline-block text-danger">{{ serverError }}</small>
  <input
    class="sign-up__login form-control"
    :class="{ 'border-danger': error.email }"
    placeholder="Email"
    type="email"
    v-model="email"
    @input="checkEmail"
  />
  <small class="sign-up__login-error text-danger fs-6 mb-2 d-inline-block">
    {{ error.email }}
  </small>
  <input
    class="sign-up__login form-control"
    :class="{ 'border-danger': error.login }"
    placeholder="Login"
    type="text"
    v-model="login"
    @input="checkLogin"
  />
  <small class="sign-up__login-error text-danger fs-6 mb-2 d-inline-block">
    {{ error.login }}
  </small>

  <input
    v-model="password"
    class="sign-up__password form-control"
    :class="{ 'border-danger': error.password }"
    placeholder="Password"
    type="password"
    @input="checkPassword"
  />
  <small class="sign-up__login-error text-danger fs-6 mb-2 d-inline-block">
    {{ error.password }}
  </small>
  <button
    class="auth__button btn btn-primary mt-2 d-block"
    @click.prevent="register"
    :disabled="!isValidData"
  >
    Зарегистрироваться
  </button>
</template>
<script>
import api from '../api'
import {
  checkLoginV,
  checkPasswordV,
  checkEmailV,
  isValidDataV,
} from '../helpers/validator.js'
import { useAuthStore } from '../store'
export default {
  data() {
    return {
      login: '',
      password: '',
      email: '',
      error: { login: '', password: '', email: '' },
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
    checkEmail() {
      this.error.email = checkEmailV(this.email)
    },
    async register() {
      this.checkLogin()
      this.checkPassword()
      this.checkEmail()

      if (this.isValidData) {
        const res = await api.registerUser(
          this.login,
          this.email,
          this.password
        )
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
