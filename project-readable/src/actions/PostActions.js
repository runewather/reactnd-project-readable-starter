import { fetchPosts, fetchPostsByCategories, fetchPostById } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID'
export const FETCH_POSTS_BY_CATEGORIES = 'FETCH_POSTS_BY_CATEGORIES'

function fetchPostsAction(posts) {
    return {
        type: FETCH_POSTS,
        posts
    }
}

function fetchPostsByCategoryAction(posts) {
    return {
        type: FETCH_POSTS_BY_CATEGORIES,
        posts
    }
}

function fetchPostByIdAction(post) {
    return {
        type: FETCH_POST_BY_ID,
        post
    }
}

export function handleFetchPostsByCategories(category) {
    return async (dispatch) => {
        const posts = await fetchPostsByCategories(category)
        dispatch(fetchPostsByCategoryAction(posts.data))
    }
}

export function handleFetchPostById(id) {
    return async (dispatch) => {
        const post = await fetchPostById(id)
        dispatch(fetchPostByIdAction(post.data))
    }
}

export function handleFetchPosts() {
    return async (dispatch) => {     
        dispatch(showLoading()) 
        const posts = await fetchPosts()
        dispatch(fetchPostsAction(posts.data))
        dispatch(hideLoading())
    }
}