import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('commentsStotre', {
  state: () => ({}),
  actions: {
    setComments(posts, post, comments) {
      const currentPost = posts.find(
        postItem => postItem.postID === post.postID
      )
      currentPost.comments = comments
    },
  },
})
