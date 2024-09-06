import dummyImage from "./assets/dummy-image.jpg";
function Card() {
  return (
    <>
      <div className="card">
        <img src={dummyImage} alt="dummy image" className="card-image" />
        <div className="card-content">
          <h1 className="card-title">Namaste Bro</h1>
          <p className="card-description">
            I am learning React.js and JavaScript by the end of this year.
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;