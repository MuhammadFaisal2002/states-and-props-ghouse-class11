'use client'

import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0)

    function handlerIncreement(){
        
        setCount(count + 1)
        
    }
    function handlerDecreement(){
        setCount(count - 1)
        
    }
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl mb-4">Count = {count}</h1>
          
          <button className="bg-green-500 text-2xl text-white font-bold py-2 px-4 rounded mb-2 w-60" onClick={handlerIncreement}>
            Increment = {count}
          </button><br/>
          
          <button className="bg-orange-500 text-2xl text-white font-bold py-2 px-4 rounded w-60" onClick={handlerDecreement}>
            Decrement = {count}
          </button>
        </div>
      </div>
    );
  }
  