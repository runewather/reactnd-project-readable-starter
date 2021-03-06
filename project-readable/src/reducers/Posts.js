import { 
    FETCH_POSTS,
    FETCH_POST_BY_ID,
    FETCH_POSTS_BY_CATEGORIES
} from '../actions/PostActions'

export default function posts (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.posts.filter((post) => { return post.deleted === false })
        case FETCH_POST_BY_ID: 
            return action.post.deleted === false ? action.post : {}  
        case FETCH_POSTS_BY_CATEGORIES:
            return action.posts.filter((post) => { return post.deleted === false })
        default:
            return state
    }
}