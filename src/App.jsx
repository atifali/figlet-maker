import React, { useState, useEffect } from "react";
import figlet from "figlet";

function App() {
  const [input, setInput] = useState("");
  const [asciiArt, setAsciiArt] = useState("");

  useEffect(() => {
    const generateAscii = async () => {
      try {
        const result = await figlet.promises.text(input || "ASCII", {
          font: "Standard",
        });
        setAsciiArt(result);
      } catch (err) {
        setAsciiArt("Something went wrong.");
      }
    };

    generateAscii();
  }, [input]);

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
      <pre className="whitespace-pre font-mono text-sm bg-gray-800 p-4 rounded-md overflow-auto max-w-full">
        {asciiArt}
      </pre>
    </div>
  );
}

export default App;
