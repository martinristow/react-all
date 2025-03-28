'use client'

const SearchBar = () => {

    const search = (searchTerm) => {
        console.log(searchTerm)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a name of product"
                       onChange={e => search(e.target.value)}/>
            </form>
        </div>
    )
}
export default SearchBar
