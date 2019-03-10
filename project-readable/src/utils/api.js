import axios from 'axios'

const URL = 'http://localhost:3001'
const AuthenticationHeader = {
    headers: {
        Authorization: 'whatever-you-want',
        'Content-Type': 'application/json',        
    }
}

export const fetchPosts = () => {
    return axios.get(URL + '/posts', AuthenticationHeader).then(res => res.data)
}

export const fetchPostById = (id) => {
    return axios.get(URL + `/posts/${id}`, AuthenticationHeader).then(res => res.data)
}

export const fetchPostsByCategories = (category) => {
    return axios.get(URL + `/${category}/posts`, AuthenticationHeader).then(res => res.data)
}

export const fetchPostComments = (id) => {
    return axios.get(URL + `/posts/${id}/comments`, AuthenticationHeader).then(res => res.data)
}

export const fetchPostCommentById = (id) => {
    return axios.get(URL + `/comments/${id}`, AuthenticationHeader).then(res => res.data)
}

export const editPostById = (id, data) => {    
    return axios.put(URL + `/posts/${id}`, data, AuthenticationHeader).then(res => res.data)
}

export const deletePostById = (id) => {
    return axios.delete(URL + `/posts/${id}`, AuthenticationHeader).then(res => res.data)
}

export const deleteCommentById = (id) => {
    return axios.delete(URL + `/comments/${id}`, AuthenticationHeader).then(res => res.data)
}

export const addPost = (data) => {
    return axios.post(URL + `/posts`, data, AuthenticationHeader).then(res => res.data)
}

export const addPostComment = (data) => {
    return axios.post(URL + '/comments', data, AuthenticationHeader).then(res => res.data)
}

export const editPostComment = (id, data) => {
    return axios.put(URL + `/comments/${id}`, data, AuthenticationHeader).then(res => res.data)
}

export const voteCommentById = (id, data) => {
    return axios.post(URL + `/comments/${id}`, data, AuthenticationHeader).then(res => res.data)
}

export const votePostById = (id, data) => {
    return axios.post(URL + `/posts/${id}`, data, AuthenticationHeader)
}

export const fetchCategories = () => {
    return axios.get(URL + '/categories', AuthenticationHeader).then(res => res.data)
      .then(data => data.categories)
}  
