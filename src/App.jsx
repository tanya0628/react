import React, { useCallback, useState } from "react";

const App = () => {
  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [carAllowed, setCharAllowed] = useState(false);
  const [password, setPassord] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYXabcdefghijklmnoprstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (setCharAllowed) str += "!@#$%^&**()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassord(pass);
  }, [length, numberAllowed, carAllowed, setPassord]);
  return (
    <div className="w-200 max-x-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className="text-4xl text-center text-white py-5">
        Password Generator
      </h1>
      <div className="flex shadow  rounded-lg overflow-hidden mb-">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-amber-50"
          placeholder="password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-.5 shrink-0 ">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1  ">
          <input
            type="range"
            min={6}
            max={10}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={carAllowed}
            id="numberInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">char</label>
        </div>
      </div>
    </div>
  );
};

export default App;
