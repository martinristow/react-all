import {useForm} from "react-hook-form"
import {JSX} from "react";
import axios from "axios";


const URL = "https://nominatim.openstreetmap.org/reverse?"

const Home = (): JSX.Element => {
    const getAddress = (location: GeolocationPosition) => {
        const lat: number = location.coords.latitude;
        const long: number = location.coords.longitude;
        const fullUrl: string = URL + `&lat=${lat}&lon=${long}&format=json`;
        axios.get(fullUrl).then(response => {
            console.log(response.data.display_name);
        })

    };
    const addressForbidden = () => console.log("We got reject")


    if (navigator.geolocation) {
        console.log("da")
        navigator.geolocation.getCurrentPosition(getAddress, addressForbidden)
    } else {
        console.log("Get location not supported")
    }


    const validCities: string[] = ["Skopje", "Stip", "Sveti Nikole", "Radovis", "Ohrid"];

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmit = (data: object) => console.log("WORKS");

    const isValidCityName = (name: string) => validCities.includes(name);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("cityName",
                {
                    required: true,
                    validate: isValidCityName,
                })}
                   type="text" placeholder="Enter city name"/>

            {errors.cityName && <p>This field is required</p>}
            <button>Add city</button>

        </form>


    )
}
export default Home
