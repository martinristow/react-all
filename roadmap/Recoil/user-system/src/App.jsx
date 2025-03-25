import {RecoilRoot} from "recoil";
import Login from "./Components/Login.jsx";
import UserData from "./Components/userData.jsx";

function App() {

    return (
        <>
            <RecoilRoot>
                <UserData />
                <Login />

            </RecoilRoot>
        </>
    )
}

export default App
