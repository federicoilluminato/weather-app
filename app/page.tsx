import Input from "./component/Input";

export default function Home() {
  return (
    <main className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input/>
          <h1>Weather App</h1>
        </div>
      </div>
    </main>
  );
}
