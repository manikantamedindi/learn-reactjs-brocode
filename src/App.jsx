import Card from "./Card.jsx";
import Button from "./Button.jsx"
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./List.jsx"
import ListObjects from "./ListObjects.jsx";
import ReactHooks from "./reactHooks.jsx";
function App() {
  const fruits = [
    {
      name: 'Apple',
      color: 'Red',
      weight: 150 // weight in grams
    },
    {
      name: 'Banana',
      color: 'Yellow',
      weight: 120 // weight in grams
    },
    {
      name: 'Cherry',
      color: 'Red',
      weight: 10 // weight in grams
    },
    {
      name: 'Date',
      color: 'Brown',
      weight: 7 // weight in grams
    },
    {
      name: 'Elderberry',
      color: 'Black',
      weight: 5 // weight in grams
    }
  ];
  const vegetables = [
    {
      name: 'Carrot',
      color: 'Orange',
      weight: 100 // weight in grams
    },
    {
      name: 'Broccoli',
      color: 'Green',
      weight: 200 // weight in grams
    },
    {
      name: 'Tomato',
      color: 'Red',
      weight: 80 // weight in grams
    },
    {
      name: 'Potato',
      color: 'Brown',
      weight: 150 // weight in grams
    },
    {
      name: 'Spinach',
      color: 'Green',
      weight: 30 // weight in grams
    }
  ];


  return (
    <>
      <ReactHooks></ReactHooks>
      <hr />
      <ListObjects data={fruits} category="fruits" />
      <hr />
      <ListObjects data={vegetables} category="vegetables" />
      <hr />
      <List />
      <hr />
      <Student name="Manikanta" age={30} isStudent={true} />
      <Student name="Nani" age={30} isStudent={false} />
      <Student name="Kishore" age={30} isStudent={false} />
      <Student name="Pawan" age={30} isStudent={true} />
      <hr />
      <Greeting name="Manikanta" isLogged={true} />
      <hr />
      <Button />
      <hr />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App
