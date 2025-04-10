import {useReducer} from "react";
import counterReducer, {StateType} from "../Reducers/CounterReducerV3.tsx";

const initialState: StateType = {count: 0};

const CounterV3 = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>Counter V3</h1>
            <h2>Count: {state.count}</h2>
            <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}
export default CounterV3
