const initialState = {
    user: {
        username: '',
        auth: false
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    username: action.payload,
                    auth: true,
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    username: '',
                    auth: false
                }
            }
    }

}

export default userReducer