import { useState } from "react";
import Figlet from "./components/figlet";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">ASCII Art Converter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="w-full max-w-md px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white"
      />
      <div className="">
        <Figlet text={input}></Figlet>
      </div>
    </div>
  );
}

export default App;