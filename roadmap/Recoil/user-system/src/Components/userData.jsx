import {useRecoilValue} from "recoil";
import {userState} from "../States/userState.js";

const UserData = () => {
    const userData = useRecoilValue(userState);
    // console.log(userData)

    return (
        <p>{userData.email}</p>
    )
};


export default UserData;