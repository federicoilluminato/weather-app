import React from 'react'

interface DayForecast {
    date: string
    day: {
        condition: {
            icon: string
            text: string
        }
        maxtemp_c: number
        mintemp_c: number
    }
}

interface WeekForecastProps {
    data: {
        forecast: {
            forecastday: DayForecast[]
        }
    }
}

const WeekForecast = ({ data } : WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-8 w-full fade-in-up">
        {data.forecast.forecastday.map((day, index ) => (
            <div key={index} className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
                <p className="text-sm">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                <div>
                    <p>H {day.day.maxtemp_c.toFixed()}°</p>
                    <p>L {day.day.mintemp_c.toFixed()}°</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default WeekForecast