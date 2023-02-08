<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo fs-1">Logo</div>
        <AuthLogout class="header__logout" />
      </div>
    </div>
  </header>
</template>

<script>
import { AuthLogout } from '@/features/authentication'
export default {
  components: { AuthLogout },
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #000;
  background: white;
  z-index: 2;
}
.header__inner {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
