import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Idata {
  name: string;
  language: string;
  age: Number;
  id: Number;
}

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([] as Idata[]);
  useEffect(() => {
    axios.get(`https://secret-plateau-06217.herokuapp.com/`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="absolute left-1/2 -translate-x-1/2 my-20 flex flex-col items-center">
        <div className=" items-center justify-center">
          <div className="my-4 text-lg">Simple Counting App</div>
          <div className="flex items-center">
            <div
              className=" cursor-pointer p-5 bg-green-500 rounded-lg hover:bg-green-600 text-white"
              onClick={() => {
                setNum(num + 1);
              }}
            >
              +
            </div>
            <span className="p-5 w-24">{num}</span>
            <div
              className=" cursor-pointer p-5 bg-green-500 rounded-lg hover:bg-green-600 text-white"
              onClick={() => {
                setNum(num - 1);
              }}
            >
              -
            </div>
          </div>
        </div>
        <div className="my-6">
          <div className="my-4 text-lg">Mapping App</div>
          <div className="flex flex-col w-80 justify-around space-y-2">
            {data.map((item, i) => (
              <div className="flex justify-around border-b border-gray-600" key={i}>
                <div className="flex-1">{(item.id).toString()}</div>
                <div className="flex-1">{item.name}</div>
                <div className="flex-1">{(item.age).toString()}</div>
                <div className="flex-1">{item.language}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
