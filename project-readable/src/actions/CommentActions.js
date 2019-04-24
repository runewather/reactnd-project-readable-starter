import { fetchPostComments, deleteCommentById, addPostComment, voteCommentById, editPostComment } from '../utils/api'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENT_BY_ID = 'FETCH_COMMENT_BY_ID'
export const DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID'

function fetchPostCommentsAction(comments) {
    return {
        type: FETCH_COMMENTS,
        comments
    }
}

export function handleVoteComment(postId, commentId, data) {
    return async (dispatch) => {        
        await voteCommentById(commentId, data)
        dispatch(handleFetchPostComments(postId))   
    }
}

export function handleAddComment(id, data) {
    return async (dispatch) => {        
        await addPostComment(data);  
        dispatch(handleFetchPostComments(id))   
    }
}

export function handleFetchPostComments(id) {
    return async (dispatch) => {
        const comments = await fetchPostComments(id)
        dispatch(fetchPostCommentsAction(comments.data))
    }
}

export function handleUpdateComment(postId, commentId, data) {
    return async (dispatch) => {
        await editPostComment(commentId, data)
        dispatch(handleFetchPostComments(postId))
    }
}

export function handleDeletePostComment(id, parentId) {
    return async (dispatch) => {
        await deleteCommentById(id)
        const comments = await fetchPostComments(parentId)
        dispatch(fetchPostCommentsAction(comments.data))
    }
}