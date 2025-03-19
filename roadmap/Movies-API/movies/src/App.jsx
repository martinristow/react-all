import SearchMovie from "./Components/SearchMovie.jsx";
import Navigation from "./Templates/Snippets/Navigation.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Templates/Snippets/Footer.jsx";


function App() {


    return (
        <>
            <Navigation/>
            <SearchMovie/>
            <Footer/>
        </>
    )
}

export default App
