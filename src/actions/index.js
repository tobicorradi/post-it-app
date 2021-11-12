export const createPost = (payload) => ({ 
    type: 'ADD_POST',
    payload
})

export const deleteAllPosts  = (payload) => ({
    type: 'DELETE_ALL',
    payload
}) 