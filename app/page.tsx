"use client";
import React, {useState} from "react";
import Input from "./component/Input";
import Content from "./component/Content";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url: string = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`
  
  const handleSearch = async(e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      e.preventDefault()
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data)
        setLocation("")
        setError("")
      } catch(error){
        setError("City not found")
        setData({})
      }
    }
  }

  return (
    <main className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white/25 w-full flex flex-col h-fit lg:h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-6 rounded-xl italic font-bold fade-in">Weather App</h1>
        </div>
        <Content data={data} error={error}/>
      </div>
    </main>
  );
}
