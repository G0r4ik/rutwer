<template>
  <div class="post-comments">
    <div v-if="post.comments?.length">
      <div
        v-for="comment of post.comments"
        class="post-comments1 p-1 border-secondary pb-2 mb-1 rounded-1"
      >
        <post-comment :comment="comment" :post="post" />
      </div>
    </div>
    <div v-else class="pb-2">Будьте первым кто оставит комментарий</div>
  </div>
  <PostCommentAdd :post="post" />
</template>
<script>
import PostComment from './PostComment.vue'
import PostCommentAdd from './PostCommentAdd.vue'

export default {
  components: { PostComment, PostCommentAdd },
  props: ['post'],
  data() {
    return {
      comments: [],
    }
  },
  mounted() {
    // getComments().then(response => {
    //   this.comments = response
    // })
  },
}
</script>
<style>
.post-comment {
  width: 100%;
  margin-top: 5px;
  /* padding: 25px; */
}
.post-comments1 {
  background: rgba(13, 110, 253, 0.5);
}
.post-comments1:last-child {
  /* border: none !important; */
}
</style>
