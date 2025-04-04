export const initialState = {count: 0}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement":
            return {...state, count: state.count - 1};
        case 'incrementByAmount':
            return {...state, count: state.count + parseInt(action.payload)};
        case 'decrementByAmount':
            return {...state, count: state.count - parseInt(action.payload)};

        default:
            return state;
    }
}

