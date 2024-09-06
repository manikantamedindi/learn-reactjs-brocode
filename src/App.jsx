import Card from "./Card.jsx";
import Button from "./Button.jsx"
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./List.jsx"
import './index.css'; // Ensure this is imported
function App() {
  return (
    <>
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
