import {RecoilRoot} from "recoil";
import Login from "./Components/Login.jsx";
import UserData from "./Components/userData.jsx";
import Tasks from "./Components/Tasks.jsx";

function App() {

    return (
        <>
            <RecoilRoot>
                <Tasks/>
                <UserData/>
                <Login/>
            </RecoilRoot>
        </>
    )
}

export default App
