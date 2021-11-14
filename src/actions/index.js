export const createPost = (payload) => ({ 
    type: 'ADD_POST',
    payload
})

export const deleteAllPosts  = (payload) => ({
    type: 'DELETE_ALL',
    payload
}) 

export const logIn = (payload) => ({
    type: 'LOG_IN',
    payload
})

export const logOut = (payload) => ({
    type: 'LOG_OUT',
    payload
})