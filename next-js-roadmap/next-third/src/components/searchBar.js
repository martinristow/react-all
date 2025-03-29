'use client'

import useState from "react";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const search = async () => {

        const response = await fetch('http://localhost:3000/api/search?prebaruvanje=' + searchTerm);
        const data = await response.json();
        setSearchResult(data.products);
    }

    return (
        <div>
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
