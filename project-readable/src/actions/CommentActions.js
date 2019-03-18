import { fetchPostComments, fetchPostCommentById } from '../utils/api'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_COMMENT_BY_ID = 'FETCH_COMMENT_BY_ID'

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