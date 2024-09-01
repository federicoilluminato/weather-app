import React from 'react';
import WeatherDetails from './WeatherDetails';
import WeekForecast from './WeekForecast';
import Current from './Current';


interface ContentProps {
  data: any; // Replace `any` with a more specific type if possible
  error: string;
}

const Content = ({ data, error } : ContentProps) => {
  let content;
  console.log("data", data)

  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center mt-[5rem] fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app</h2>
        <p>Enter a city name to get the weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center mt-[5rem] fade-in-up">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return <div className="">{content}</div>;
};

export default Content;
