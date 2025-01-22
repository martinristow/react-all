import './App.css'
import axios from "axios";


// console.log(import.meta.env.VITE_OMDBAPI_KEY)
// console.log(import.meta.env.VITE_APP_OMDBAPI_URL)

// fetch("")
//     .then(response => response.json()) // pretvarame go odgovorot u JSON format
//     .then(jsonResponse => console.log(jsonResponse));

axios.get(import.meta.env.VITE_APP_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


function App() {

  return (
    <>
      <p>Zdravo</p>
    </>
  )
}

export default App
