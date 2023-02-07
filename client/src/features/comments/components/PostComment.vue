<template>
  <div class="d-flex justify-content-between">
    <div class="post-comment__author fs-3">{{ comment.author }}</div>
    <div class="d-flex">
      <div class="post-comment__date">{{ comment.date }}</div>
      <div v-if="comment.id_user === user.id" class="dropdown">
        <span
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="ms-2"
        >
          ...
          <Comment-Tooltip :comment="comment" :post="post" />
        </span>
      </div>
    </div>
  </div>
  <div class="post-comment__text fs-5">{{ comment.text }}</div>
</template>
<script>
import CommentTooltip from './CommentTooltip.vue'
export default {
  components: { CommentTooltip },
  props: { comment: Object, post: Object },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
}
</script>
