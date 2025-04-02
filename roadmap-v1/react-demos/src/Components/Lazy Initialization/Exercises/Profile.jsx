import React, {useState} from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({name: "", age: ''})

    const handleChange = (e) => {
        const {name, value} = e.target
        setProfile((prevProfile) => ({...prevProfile, [name]: value}))
    }

    return (
        <div>
            <h2>Display Information</h2>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>


            <div>
                <input type="text" name="name" value={profile.name} placeholder="Change the Name"
                       onChange={handleChange}/>
                <input type="text" name="age" value={profile.age} placeholder="Change the Age" onChange={handleChange}/>
            </div>
        </div>
    )
}
export default Profile
