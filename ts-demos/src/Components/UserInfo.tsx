import {Info} from "../types.ts";


type UserInfoProp = {
    user: Info;
}

const UserInfo = ({user}: UserInfoProp) => {
    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}
export default UserInfo
