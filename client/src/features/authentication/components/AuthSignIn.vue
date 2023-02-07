<template>
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
    @click.prevent="checkData"
    :disabled="!isValidData"
  >
    Войти
  </button>
</template>

<script>
import {
  checkLoginV,
  checkPasswordV,
  isValidDataV,
} from '../helpers/validator.js.js'
export default {
  emits: ['login'],
  data() {
    return {
      login: '',
      password: '',
      error: { login: '', password: '' },
    }
  },

  computed: {
    isValidData() {
      return isValidDataV(this.error)
    },
  },

  methods: {
    checkData() {
      this.checkLogin()
      this.checkPassword()

      if (this.isValidData) {
        this.$emit('login', this.login, this.password)
      }
    },

    checkLogin() {
      checkLoginV(this.login, this.error)
    },
    checkPassword() {
      checkPasswordV(this.password, this.error)
    },
  },
}
</script>
