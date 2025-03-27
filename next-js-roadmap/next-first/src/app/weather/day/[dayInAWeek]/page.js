export default function WeatherDayInAWeek({params}) {

    const daysInWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    if (!daysInWeek.includes(params.dayInAWeek)) {
        return <>
            <h1>You didn't enter the correct day in a week, allowed days:</h1>
            {
             daysInWeek.map(day => {
                 return <p key={day}>{day}</p>
             })
            }

        </>
    }

    return <p>Hello you are looking at the weather for {params.dayInAWeek}</p>

}