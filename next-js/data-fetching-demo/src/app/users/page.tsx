interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}


export default async function UsersPage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // console.log(users);
    return (
        <div>
            <h1>Users Page</h1>
            {users.map((user: User) => (
                <div key={user.id} className="bg-gray-200 p-[2rem] m-[3rem] flex items-center justify-between">
                    <div className='bg-gray-300 p-4 rounded-lg shadow-lg font-bold'>
                        <h1>{user.name}</h1>
                        <p>{user.username}</p>
                    </div>
                    <div className='bg-gray-400 p-4 rounded-lg shadow-lg font-bold'>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}