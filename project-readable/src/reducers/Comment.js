import {
    FETCH_COMMENTS
} from '../actions/CommentActions'


export default function comment(state = {}, action) {
    switch(action.type) {
        case FETCH_COMMENTS: 
            return action.comments.filter((comment) => { return comment.deleted === false })
        default :
            return state
    }
}