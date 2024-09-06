function List() {
  const carNames = ["Innova", "Maruthi", "KIA", "Benz"]
  return (
    <>
      <ol>
        {
          carNames.map((car, index) =>
            <li key={index}>{car}</li>
          )
        }
      </ol>
    </>
  );
}

export default List;