import { fetchPostComments, deleteCommentById } from '../utils/api'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENT_BY_ID = 'FETCH_COMMENT_BY_ID'
export const DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID'

function fetchPostCommentsAction(comments) {
    return {
        type: FETCH_COMMENTS,
        comments
    }
}

export function handleFetchPostComments(id) {
    return async (dispatch) => {
        const comments = await fetchPostComments(id)
        dispatch(fetchPostCommentsAction(comments.data))
    }
}

export function handleDeletePostComment(id, parentId) {
    return async (dispatch) => {
        await deleteCommentById(id)
        const comments = await fetchPostComments(parentId)
        dispatch(fetchPostCommentsAction(comments.data))
    }
}