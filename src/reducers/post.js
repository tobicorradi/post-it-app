const initialState = {
    postList: [{id: 1, text: 'This is a sample text', color: '#33333'}, {id: 2, text: 'This is a sample text', color: '#33333'}]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_POST':
            const addedPost = [...state.postList, action.payload]
        default:
            return state
    }
}

export default postReducer