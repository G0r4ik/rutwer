<template>
  <ul class="dropdown-menu">
    <li class="dropdown-item" @click="editPost">Отредактировать</li>
    <li class="dropdown-item" @click="deletePost">Удалить</li>
  </ul>
</template>

<script>
export default {
  emits: ['deletePost', 'editPost'],
  methods: {
    editPost() {
      this.$emit('editPost')
    },
    deletePost() {
      this.$emit('deletePost')
    },
  },
}
</script>
