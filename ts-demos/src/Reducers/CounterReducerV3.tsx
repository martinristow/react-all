export type StateType = {
    count: number;
}

type IncrementAction = { type: "INCREMENT" };
type DecrementAction = { type: "DECREMENT" };

type CounterAction = IncrementAction | DecrementAction;

const counterReducer = (state: StateType, action: CounterAction) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            return state;
    }
}

export default counterReducer;