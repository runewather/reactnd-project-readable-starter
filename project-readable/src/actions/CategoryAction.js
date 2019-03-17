import { fetchCategories } from '../utils/api'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

function fetchCategoriesAction (categories) {
    return {
        type: FETCH_CATEGORIES,
        categories
    }
}

export function handleFetchCategories () {
    return async (dispatch) => {
        const categories = await fetchCategories()        
        dispatch(fetchCategoriesAction(categories.data))
    }
}