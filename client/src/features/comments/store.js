import { defineStore } from 'pinia'
import api from './api'

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
