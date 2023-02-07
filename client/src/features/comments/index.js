import PostComments from './components/PostComments.vue'
import api from './api'
import { useCommentsStore } from './store'
const showAllComments = api.showAllComments

export { PostComments, showAllComments, useCommentsStore }
