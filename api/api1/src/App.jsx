import './App.css'
import Movies from "./Components/Movies.jsx";
import MoviesExample from "./Components/MoviesExample.jsx";
import Navigation from "./Templates/Snippets/Navigation.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Templates/Snippets/Footer.jsx";





function App() {

  return (
    <>
      <p>Zdravo</p>
      <Navigation />
        <Movies />
        <MoviesExample />
      <Footer />
    </>
  )
}

export default App
