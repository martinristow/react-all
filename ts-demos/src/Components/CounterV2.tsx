import {useReducer} from "react";
import reducer from "../Reducers/CounterReducer.tsx";

const CounterV2 = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    )
}
export default CounterV2
