<template>
  <div class="post-comments">
    <div v-if="comments.length">
      <div v-for="comment of comments" class="post-comment">
        <div class="post-comment__author">{{ comment.author }}</div>
        <div class="post-comment__text">{{ comment.text }}</div>
        <div class="post-comment__date">{{ comment.date }}</div>
      </div>
    </div>
    <div v-else>Будьте первым кто оставит комментарий</div>
  </div>
</template>
<script>
export default {
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
<style></style>
