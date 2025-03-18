import React, {useState} from 'react'

const Weather = () => {

    let [country, setCountry] = useState("");
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [cities, setCities] = useState([]);

    function addCity() {
        if (country === "" || city === "" || temperature === "") {
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
        <>

            <input type="text" onInput={(e) => setCountry(e.target.value)}/>
            <input type="text" onInput={(e) => setCity(e.target.value)}/>
            <input type="number" onInput={(e) => setTemperature(e.target.value)}/>
            <button onClick={addCity}>Add City</button>


            <div>
                {
                    cities.map((city) => (
                        <p>Country: {city.country}, City: {city.name}, Temperature: {city.temperature}</p>
                    ))
                }

            </div>
        </>
    )
}
export default Weather
