// import User from "./Components/User.tsx";
// import Button from "./Components/Button.tsx";


// import UserInfo from "./Components/UserInfo.tsx";
// import AdminInfo from "./Components/AdminInfo.tsx";
// import {Info, AdminInfoList} from "./types.ts";

// import Counter from "./Components/Counter.tsx";
// import UserProfile from "./Components/UserProfile.tsx";
// import TodoList from "./Components/TodoList.tsx";
// import Form from "./Components/Form.tsx";

// import FocusInput from "./Components/FocusInput.tsx";
// import ContactForm from "./Components/ContactForm.tsx";
// import EventHandling from "./Components/EventHandling.tsx";
// import CounterV1 from "./Components/CounterV1.tsx";
// import CounterV2 from "./Components/CounterV2.tsx";
//
// import CounterV3 from "./Components/CounterV3.tsx";

// import MyComponent from "./UseEffect/MyComponent.tsx";
import UserList from "./UseEffect/UserList.tsx";

const App = () => {
    // const user: Info = {
    //     id: 1,
    //     name: "Martin",
    //     email: "martin@gmail.com",
    // }
    //
    // const admin: AdminInfoList = {
    //     id: 2,
    //     name: "Admin",
    //     email: "admin@gmail.com",
    //     role: "admin",
    //     lastLogin: new Date(),
    // }

    return (
        <div>
            {/*<User name="martin" age={20} isStudent={true}/>*/}
            {/*<Button label="Click" onClick={()=> {console.log("Clicked")}} disabled={false} />*/}
            {/*<UserInfo user={user}/>*/}
            {/*<AdminInfo admin={admin}/>*/}

            {/*<Counter/>*/}
            {/*<UserProfile/>*/}
            {/*<TodoList/>*/}
            {/*<Form/>*/}

            {/*<FocusInput/>*/}
            {/*<ContactForm/>*/}
            {/*<EventHandling/>*/}

            {/*<CounterV1/>*/}

            {/*<CounterV2/>*/}

            {/*<CounterV3/>*/}

            {/*<MyComponent/>*/}

            <UserList />
        </div>
    )
}
export default App
