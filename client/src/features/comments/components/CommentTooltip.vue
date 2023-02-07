<template>
  <ul class="dropdown-menu">
    <li class="dropdown-item" @click="editComment">Отредактировать</li>
    <li class="dropdown-item" @click="deleteComment">Удалить</li>
  </ul>
</template>

<script>
import api from '../api'

export default {
  props: { comment: Object, post: Object },
  methods: {
    deleteComment() {
      const token = localStorage.getItem('authToken')

      api.deleteComment(token, this.post.postID, this.comment.id)
      const index = this.post.comments.findIndex(p => p.id == this.comment.id)
      if (index > -1) this.post.comments.splice(index, 1)
    },
    editComment() {},
  },
}
</script>
