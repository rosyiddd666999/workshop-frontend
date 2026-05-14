const APP_URL = "http://localhost:3000/students";

function loadStudents() {
  fetch(APP_URL)
    .then((res) => res.json())
    .then((students) => {
      const tBody = document.getElementById("studentBody");
      tBody.innerHTML = "";
      students.forEach((student) => {
        const row = `
          <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
          </tr>
        `;
        tBody.innerHTML += row;
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

loadStudents();