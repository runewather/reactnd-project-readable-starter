import { fetchPosts, fetchPostsByCategories, fetchPostById, deletePostById, votePostById, addPost, editPostById } from '../utils/api'
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

export function handleVotePost(id, option, isSinglePage) {
    return async (dispatch) => {
        await votePostById(id, option)
        if(isSinglePage) {            
            dispatch(handleFetchPostById(id))
        } else {
            dispatch(handleFetchPosts())
        } 
    }
}

export function handleFetchPostsByCategories(category) {
    return async (dispatch) => {
        const posts = await fetchPostsByCategories(category)
        dispatch(fetchPostsByCategoryAction(posts.data))
    }
}

export function handleDeletePostById(id) {
    return async (dispatch) => {        
        await deletePostById(id)
        const posts = await fetchPosts()
        dispatch(fetchPostsAction(posts.data))
    }
}

export function handleAddNewPost(data) {
    return async (dispatch) => {        
       await addPost(data);  
       dispatch(handleFetchPosts())   
    }
}

export function handleFetchPostById(id) {
    return async (dispatch) => {
        dispatch(showLoading()) 
        let post
        try {
            post = await fetchPostById(id)
        }catch(e) {
            post = { deleted: true }
        }         
        if(post.data !== undefined ) {
            dispatch(fetchPostByIdAction(post.data))
        } else {
            post.data = { deleted: true }
            dispatch(fetchPostByIdAction(post.data))
        }        
        dispatch(hideLoading())
    }
}

export function handleUpdatePost(id, data) {
    return async (dispatch) => {
        await editPostById(id, data)
        dispatch(handleFetchPostById(id))
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