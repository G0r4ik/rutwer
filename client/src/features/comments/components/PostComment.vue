<template>
  <div class="d-flex justify-content-between">
    <div class="post-comment__author fs-3">
      {{ comment.author }}
    </div>
    <div class="d-flex">
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
  <div class="post-comment__text fs-4">
    {{ comment.text }}
  </div>
  <div class="post-comment__date fs-6">{{ normalizeDateComp }}</div>
</template>
<script>
import { normalizeDate } from '@/shared/helpers'
import CommentTooltip from './CommentTooltip.vue'
export default {
  components: { CommentTooltip },
  props: { comment: Object, post: Object },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  computed: {
    normalizeDateComp() {
      return normalizeDate(this.comment.date)
    },
  },
}
</script>
