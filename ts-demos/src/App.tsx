import User from "./Components/User.tsx";
import Button from "./Components/Button.tsx";


const App = () => {


    return (
        <div>
            {/*<User name="martin" age={20} isStudent={true}/>*/}
            <Button label="Click" onClick={()=> {console.log("Clicked")}} disabled={false} />
        </div>
    )
}
export default App
