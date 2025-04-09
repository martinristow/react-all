import {useState} from "react";

interface UserProfile {
    name: string;
    email: string;
    password: string;
    age: number;
}


const UserProfile = () => {

    const [profile, setProfile] = useState<UserProfile>({
        name: "",
        email: "",
        password: "",
        age: 0,
    })

    const updateName = (name: string) => {
        setProfile((prevProfile) => ({...prevProfile, name}))
    }

    const updateAge = (age: string) => {
        setProfile((prevProfile) => ({...prevProfile, age: Number(age)}))
    }

    const updateEmail = (email: string) => {
        setProfile(((prevProfile) => ({...prevProfile, email: email})))
    }

    return (
        <div>
            <h2>User Profile</h2>

            <input type="text" placeholder="Name" value={profile.name}
                   onChange={(e) => updateName(e.currentTarget.value)}/>
            <input type="number" placeholder="Age" value={profile.age > 0 ? profile.age : ''}
                   onChange={e => updateAge(e.currentTarget.value)}/>
            <input type="email" placeholder="Email" value={profile.email}
                   onChange={e => updateEmail(e.currentTarget.value)}/>

            <h1>Profile Summary</h1>
            <h2>Name: {profile.name}</h2>
            <h2>Age: {profile.age}</h2>
            <h2>Email: {profile.email}</h2>

        </div>
    )
}
export default UserProfile
