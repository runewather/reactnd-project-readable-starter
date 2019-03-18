import {
    FETCH_COMMENTS
} from '../actions/CommentActions'


export default function comment(state = {}, action) {
    switch(action.type) {
        case FETCH_COMMENTS: 
            return action.comments
        default :
            return state
    }
}