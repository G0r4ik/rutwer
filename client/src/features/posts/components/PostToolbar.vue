<template>
  <div class="dropdown post-item__dropdown">
    <span type="button" data-bs-toggle="dropdown" aria-expanded="false">
      ...
    </span>
    <ul class="dropdown-menu">
      <li class="dropdown-item" @click="editPost">Отредактировать</li>
      <li class="dropdown-item" @click="deletePost">Удалить</li>
    </ul>
  </div>
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
