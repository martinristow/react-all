// type UserShape = {
//     name: string,
//     age: number,
//     isStudent: boolean
// }

import {FC} from "react";

interface UserShape {
    name: string;
    age: number;
    isStudent: boolean;
}


const User: FC<UserShape> = ({name, age, isStudent}) => {
    return (
        <div>
            <h1>{name}, {age}, {isStudent}</h1>
        </div>
    )
}
export default User
