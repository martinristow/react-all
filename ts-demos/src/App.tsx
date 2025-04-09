// import User from "./Components/User.tsx";
// import Button from "./Components/Button.tsx";


import UserInfo from "./Components/UserInfo.tsx";
import AdminInfo from "./Components/AdminInfo.tsx";
import {Info, AdminInfoList} from "./types.ts";

const App = () => {
    const user: Info = {
        id: 1,
        name: "Martin",
        email: "martin@gmail.com",
    }

    const admin: AdminInfoList = {
        id: 2,
        name: "Admin",
        email: "admin@gmail.com",
        role: "admin",
        lastLogin: new Date(),
    }

    return (
        <div>
            {/*<User name="martin" age={20} isStudent={true}/>*/}
            {/*<Button label="Click" onClick={()=> {console.log("Clicked")}} disabled={false} />*/}
            <UserInfo user={user}/>
            <AdminInfo admin={admin}/>
        </div>
    )
}
export default App
