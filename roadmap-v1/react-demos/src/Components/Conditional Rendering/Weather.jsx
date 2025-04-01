import React from 'react'

export const Weather = ({temperature}) => {
    const temperatureConvert = parseInt(temperature)
    if(temperatureConvert < 15){
        return <h2>It's cold outside!</h2>
    } else if(temperatureConvert > 15 && temperatureConvert < 25){
        return <h2>It's nice outside!</h2>
    } else{
        return <h2>It's hot outside!</h2>
    }

    return (
        <div>Weather</div>
    )
}
