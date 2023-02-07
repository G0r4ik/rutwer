<template>
  <div class="post-comments pt-2 bg-primary text-light">
    <div v-if="post.comments?.length">
      <div
        v-for="comment of post.comments"
        class="post-comments1 border-top border-primary border-top-2 mb-2"
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
  padding: 25px;
}
</style>
