const initialState = {
    postList: [{id: 1, text: 'This is a sample text', color: '#ffd707'}, {id: 2, text: 'This is a sample text', color: '#ffd707'}]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_POST':
            const addedPost = [...state.postList, action.payload]
            return{
                ...state,
                postList: addedPost
            }
        default:
            return state
    }
}

export default postReducer