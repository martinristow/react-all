import {get, useForm} from "react-hook-form"
import {JSX} from "react";
// import React from 'react'

const Home = (): JSX.Element => {
    const getAddress = (location: GeolocationPosition) => console.log(location.coords.latitude, location.coords.longitude)
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
