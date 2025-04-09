type ActionType = { type: 'INCREMENT' } | { type: 'DECREMENT' }
type StateType = { count: number }


const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default:
            return state;
    }
}

export default reducer;