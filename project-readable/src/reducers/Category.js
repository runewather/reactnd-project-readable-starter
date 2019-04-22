import {
    FETCH_CATEGORIES
} from '../actions/CategoryAction'

export default function category (state = {}, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return action.categories
        default:
            return state
    }
}