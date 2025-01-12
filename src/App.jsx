import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151]  gap-10 flex flex-col mx-auto justify-center items-center">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </div>

      <div className="flex flex-row bg-white rounded-sm items-center gap-12 py-3 justify-center text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
