import './App.css'
import axios from "axios";
import Movies from "./Components/Movies.jsx";



axios.get(import.meta.env.VITE_APP_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


function App() {

  return (
    <>
      <p>Zdravo</p>
        <Movies />
    </>
  )
}

export default App
