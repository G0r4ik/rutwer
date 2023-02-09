import PostComments from './components/PostComments.vue'
import api from './api.js'
import { useCommentsStore } from './store.js'
const showAllComments = api.showAllComments

export { useCommentsStore, showAllComments, PostComments }
