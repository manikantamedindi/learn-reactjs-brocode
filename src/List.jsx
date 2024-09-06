function List() {
  const carNames = ["Innova", "Maruthi", "KIA", "Benz"];
  const students = [
    {
      id: 1,
      name: "John Doe",
      age: 21,
      gender: "Male",
      course: "Computer Science",
      grade: "A",
      email: "johndoe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      gender: "Female",
      course: "Mathematics",
      grade: "B",
      email: "janesmith@example.com"
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 20,
      gender: "Male",
      course: "Physics",
      grade: "A",
      email: "mikejohnson@example.com"
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 23,
      gender: "Female",
      course: "Chemistry",
      grade: "C",
      email: "emilydavis@example.com"
    },
    {
      id: 5,
      name: "Chris Lee",
      age: 19,
      gender: "Male",
      course: "Biology",
      grade: "B",
      email: "chrislee@example.com"
    },
    {
      id: 6,
      name: "Jessica Brown",
      age: 21,
      gender: "Female",
      course: "English",
      grade: "A",
      email: "jessicabrown@example.com"
    },
    {
      id: 7,
      name: "David Wilson",
      age: 22,
      gender: "Male",
      course: "History",
      grade: "B",
      email: "davidwilson@example.com"
    },
    {
      id: 8,
      name: "Sophia Martinez",
      age: 20,
      gender: "Female",
      course: "Art",
      grade: "C",
      email: "sophiamartinez@example.com"
    },
    {
      id: 9,
      name: "James Taylor",
      age: 23,
      gender: "Male",
      course: "Economics",
      grade: "A",
      email: "jamestaylor@example.com"
    },
    {
      id: 10,
      name: "Olivia Anderson",
      age: 21,
      gender: "Female",
      course: "Political Science",
      grade: "B",
      email: "oliviaanderson@example.com"
    }
  ];
  return (
    <>
      <ol>
        {
          carNames.map((car, index) =>
            <li key={index}>{car}</li>
          )
        }
      </ol>
      <div className="table">
        <table>
          <tbody>
            {
              students.map(student =>
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    {student.gender}
                  </td>
                  <td>
                    {student.course}
                  </td>
                  <td>
                    {student.grade}
                  </td>
                  <td>
                    {student.email}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>

      </div>
    </>
  );
}

export default List;