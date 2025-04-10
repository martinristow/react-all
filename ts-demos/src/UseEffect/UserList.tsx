import {useEffect, useState} from "react";

interface UserListData {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}


const UserList = () => {
    const [userData, setUserData] = useState<UserListData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchingUserData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) throw new Error("Network response was not ok.");
                const data: UserListData[] = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "An error occurred.");
            } finally {
                setLoading(false);
            }
        }

        fetchingUserData();
    }, []);


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>


    return (
        <div>
            <h1>User List</h1>
            {userData && userData.map((user: UserListData) => {
                return (
                    <div key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>UserName: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <br/>
                    </div>
                )
            })}
        </div>
    )
}
export default UserList
