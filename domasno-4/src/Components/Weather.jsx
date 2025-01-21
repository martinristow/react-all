import {useState} from "react";


function Weather() {

    let [country, setCountry] = useState("");
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [cities, setCities] = useState([]);



    function addCity(){

        if(country === "" || city === "" || temperature === ""){
            return;
        }

        const newCity = [{
            name: city,
            country: country,
            temperature: temperature,
        }];

        setCities(currentCities => [...currentCities, ...newCity]);


    }
    return (
        <div>
        <input type="text" onInput={ (e) => setCountry(e.currentTarget.value) }/>
        <input type="text" onInput={ (e) => setCity(e.currentTarget.value)}/>
        <input type="number" onInput={ (e) => setTemperature(e.currentTarget.value)}/>
            <button className="btn btn-primary mt-3 col-3 border-3 border-black" onClick={addCity}>Add city</button>

            <div className="text-center mt-3">
                { cities.map(city => (
                    <p className="fw-medium p-1">City: {city.name}, Country: {city.country}, Temperature: {city.temperature}</p>
                ))}
            </div>

        </div>
    )
}


export default Weather;