import propTypes from "prop-types";
function Greeting(props) {
  const welcomeMessage = <h2>Welcome {props.name}</h2>;
  const LoginMessage = "Please Log in to Continue"

  return (
    props.isLogged ? welcomeMessage : LoginMessage
  );
}

Greeting.propTypes = {
  isLogged: propTypes.bool,
  name: propTypes.string,
}

export default Greeting;