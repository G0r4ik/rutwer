<template>
  <ul class="dropdown-menu">
    <li class="dropdown-item" @click="editComment">Отредактировать</li>
    <li class="dropdown-item" @click="deleteComment">Удалить</li>
  </ul>
  <teleport to="body">
    <CommentEdit
      v-if="isShowCommentEdit"
      :comment="comment"
      :post="post"
      @close="close"
    />
  </teleport>
</template>

<script>
import api from '../api'
import CommentEdit from './CommentEdit.vue'
export default {
  components: { CommentEdit },
  props: { comment: Object, post: Object },
  data() {
    return {
      isShowCommentEdit: false,
    }
  },
  methods: {
    close() {
      this.isShowCommentEdit = false
    },
    deleteComment() {
    

      api.deleteComment(this.post.postID, this.comment.id)
      const index = this.post.comments.findIndex(p => p.id == this.comment.id)
      if (index > -1) this.post.comments.splice(index, 1)
    },
    editComment() {
      this.isShowCommentEdit = true
    },
  },
}
</script>
