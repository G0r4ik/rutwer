<template>
  <app-header />
  <posts-create />
  <app-posts />
</template>

<script>
import AppHeader from '@/shared/components/AppHeader.vue'
import { AppPosts, PostsCreate } from '@/features/posts'

export default {
  components: { AppHeader, AppPosts, PostsCreate },
}
</script>
