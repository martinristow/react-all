// import FetchTodo from "./Components/FetchTodo.tsx";

// import NewWayToFetchTodo from "./Components/use/NewWayToFetchTodo.tsx";
// import {Suspense} from "react";
import Theme from './Components/UseContext/Theme.tsx'

const App = () => {
    return (
        // <Suspense>
        //     {/*<FetchTodo/>*/}
        //     <NewWayToFetchTodo/>
        // </Suspense>

        <div className="flex justify-center items-center w-full mt-[10rem]">
            <Theme />
        </div>
    )
}
export default App
