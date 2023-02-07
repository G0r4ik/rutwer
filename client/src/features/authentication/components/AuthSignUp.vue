<template>
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
    @click.prevent="checkData"
    :disabled="!isValidData"
  >
    Зарегистрироваться
  </button>
</template>
<script>
import {
  checkLoginV,
  checkPasswordV,
  checkEmailV,
  isValidDataV,
} from '../helpers/validator.js.js'
export default {
  emits: ['register'],

  data() {
    return {
      login: '',
      password: '',
      email: '',
      error: { login: '', password: '', email: '' },
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
      this.checkEmail()

      if (this.isValidData) {
        this.$emit('register', this.login, this.password, this.email)
      }
    },
    checkLogin() {
      checkLoginV(this.login, this.error)
    },
    checkPassword() {
      checkPasswordV(this.password, this.error)
    },
    checkEmail() {
      checkEmailV(this.email, this.error)
    },
  },
}
</script>
