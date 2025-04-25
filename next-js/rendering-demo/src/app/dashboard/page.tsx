"use client";

import {useState} from "react";

export default function DashboardPage() {

    const [name, setName] = useState("");

    console.log("Client Component")
    return (
        <div>
            <h1>Dashboard</h1>
            <input
                type="text"
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
                placeholder="Enter your name"
                className="rounded"
            />
            <p>Hello, {name}!</p>
        </div>
    )
}