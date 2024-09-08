import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0)

  const incrementBtn = () => {
    setCount(count + 1)
  }
  const decrementBtn = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Counter UI</h2>
        <div id="counterValue" className="text-4xl font-bold text-blue-500 mb-6">{count}</div>
        <div className="flex justify-between">
          <button onClick={decrementBtn} id="decrementBtn" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">-</button>
          <button onClick={incrementBtn} id="incrementBtn" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">+</button>
        </div>
      </div>
    </>
  );
}

export default Counter;