import { useState } from 'react';
import Counter from "./Counter.jsx";
function ReactHooks() {

  // const [color, setColor] = useState('green')

  // const changeColor = () => {
  //   setColor('blue')
  // }

  // const [model, setModel] = useState("Saltos")
  // const [color, setColor] = useState("red")
  // const [brand, setBrand] = useState("Kia")
  // const [year, setYear] = useState(2022)
  const [car, setCar] = useState({
    model: "Saltos",
    color: "red",
    brand: "Kia",
    year: 2022,
  })
  const changeCarColor = () => {
    setCar((prev) => {
      return {
        ...prev, color: "Orange"
      }
    })
  }
  return (
    <>
      <Counter></Counter>
      <hr />
      <h1>My {car.model}</h1>
      <p>It is a {car.color} {car.brand} from {car.year}</p>
      <button className="btn border-t-neutral-100 p-3 bg-blue-500 mt-2" onClick={changeCarColor}>Orange</button>
      <hr />
      {/* <h1>My favourite color is {color}!</h1>
      <button className="btn border-t-neutral-100 p-3 bg-blue-500 mt-2" onClick={changeColor}>Blue</button> */}
    </>
  );
}

export default ReactHooks;