export const initialState = {
    name: null, email: null, password: null,
}


export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload};
        case 'SET_EMAIL':
            return {...state, email: action.payload};
        case 'SET_PASSWORD':
            return {...state, password: action.payload};
        default:
            return state;
    }
}

