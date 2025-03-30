'use client'

import {useState} from "react";
import {useAuth} from "@/app/context/authContext";
import {signOut} from "firebase/auth";
import {auth} from "@/app/firebase";

const SearchBar = () => {

    const {loggedIn} = useAuth();

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const logoutUser = () => {
        signOut(auth).then(() => {
            window.location.reload();
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    const search = async () => {

        const response = await fetch('http://localhost:3000/api/search?prebaruvanje=' + searchTerm);
        const data = await response.json();
        setSearchResult(data.products);
    }

    return (
        <div>

            <div>{loggedIn ? <button onClick={logoutUser}>Logout</button> : <a href="/user/login">Login</a>}</div>


            <form>
                <input type="text" placeholder="Enter a name of product"
                       onInput={e => setSearchTerm(e.target.value)}/>
                <button type="button" onClick={search}>Search</button>
            </form>

            {
                searchResult && searchResult.map((product, index) => (
                    <p key={index}>{product.title}</p>
                ))
            }

        </div>
    )
}
export default SearchBar
