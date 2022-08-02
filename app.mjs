let summaryGender = document.querySelector(".summary-section");

const dataAndTitle = [
  {
    title: "S/N",
    dataSort: "id",
  },
  {
    title: "First Name",
    dataSort: "first_name",
  },
  {
    title: "Last Name",
    dataSort: "last_name",
  },
  {
    title: "Gender",
    dataSort: "gender",
  },
  {
    title: "Age",
    dataSort: "age",
  },
];
const infoData = [
  {
    track: "Frontend",
    id: "table-row1",
    class: "front-table",
  },
  {
    track: "Backend",
    id: "table-row2",
    class: "back-table",
  },
  {
    track: "Cloud",
    id: "table-row3",
    class: "cloud-table",
  },
];

let mainDiv = document.querySelector(".statistics-section");

const repeatTable = (data) => {
  let repeatedTable = "";

  data.map((info) => {
    repeatedTable += `
    <div class="div-table full-statistics">
      <h3>${info.track}</h3>
      <div class="table-box">
        <table
          class="${info.class}"
        >
          <thead>
            <tr></tr>
          </thead>
          <tbody id=${info.id}>
            <tr>
              <td><i>Loading...</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;
  });

  mainDiv.innerHTML = repeatedTable;
};

window.addEventListener("DOMContentLoaded", repeatTable(infoData));
let tHead = document.querySelectorAll(".full-statistics thead tr");
const generateHeadings = (titles) => {
  let generatedTitles = "";
  titles.map((el) => {
    generatedTitles += `
    <th
    data-sort=${el.dataSort}
    scope="col"
    >
    ${el.title}
    </th>
    `;
  });

  // console.log(generatedTitles);

  tHead.innerHTML = generatedTitles;
  tHead.forEach((th) => {
    th.innerHTML = generatedTitles;
  });
};

generateHeadings(dataAndTitle);

const repeatHTML = (result) => {
  let repeatedHTML = `
      <tr>
        <td>
          ${result.id}
        </td>
        <td>
        ${result.first_name}
        </td>
        <td>
        ${result.last_name}
        </td>
        <td>
        ${result.gender}
        </td>
        <td>
        ${result.age}
        </td>
      </tr>
  `;
  return repeatedHTML;
};

const repeatContent = (result) => {
  let repeatedContent = `
      <tr>
        <td>
        ${result.name}
        </td>
        <td>
        ${result.male}
        </td>
        <td>
        ${result.female}
        </td>
        <td>
        ${result.queer}
        </td>
        <td>
        ${result.agender}
        </td>
        <td>
        ${result.polyGender}
        </td>
        <td>
        ${result.total}
        </td>
      </tr>
  `;
  return repeatedContent;
};

let row1 = document.querySelector("#table-row1");
let row2 = document.querySelector("#table-row2");
let row3 = document.querySelector("#table-row3");

let genderRow = document.querySelector(".gender-row");
let ageRow = document.querySelector(".age-row");

async function startApp() {
  const response = await fetch("./data.json");
  const result = await response.json();

  const instructor = result.TechSchool.Instructors;

  const instructorMap = [];

  const students = result.TechSchool.Students;

  //Get the heading of each table
  const frontHeading = document.querySelectorAll(".front-table thead tr th");
  const backHeading = document.querySelectorAll(".back-table thead tr th");
  const cloudHeading = document.querySelectorAll(".cloud-table thead tr th");

  let fH =
    frontHeading[0].parentElement.parentElement.parentElement.parentElement
      .parentElement.firstElementChild.textContent;
  let bH =
    backHeading[0].parentElement.parentElement.parentElement.parentElement
      .parentElement.firstElementChild.textContent;
  let cH =
    cloudHeading[0].parentElement.parentElement.parentElement.parentElement
      .parentElement.firstElementChild.textContent;

  //Add event listener to each column heading
  frontHeading.forEach((t) => {
    t.addEventListener("click", sort1, false);
  });
  backHeading.forEach((t) => {
    t.addEventListener("click", sort2, false);
  });
  cloudHeading.forEach((t) => {
    t.addEventListener("click", sort3, false);
  });

  let sortCol;
  let sortAsc = false;

  //create an initial function to sort to pass the parameters
  function sort(e, track) {
    let thisSort = e.target.dataset.sort;
    if (sortCol === thisSort) sortAsc = !sortAsc;
    sortCol = thisSort;

    students[track].sort((a, b) => {
      if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
      if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
      return 0;
    });
  }

  //sort the data in each object
  function sort1(e) {
    sort(e, fH);
    generateStudent(frontend, row1);
  }
  function sort2(e) {
    sort(e, bH);
    generateStudent(backend, row2);
  }
  function sort3(e) {
    sort(e, cH);
    generateStudent(cloud, row3);
  }

  const frontend = students.Frontend;
  const backend = students.Backend;
  const cloud = students.Cloud;

  let maleFE, femaleFE, queerFE, aGenderFE, polyGenderFE;
  maleFE = femaleFE = queerFE = aGenderFE = polyGenderFE = 0;

  const studentsAge = [];

  frontend.map((el) => {
    studentsAge.push(el.age);

    if (el.gender === "Male") {
      maleFE += 1;
    }
    if (el.gender === "Female") {
      femaleFE += 1;
    }
    if (el.gender === "Genderqueer") {
      queerFE += 1;
    }
    if (el.gender === "Agender") {
      aGenderFE += 1;
    }
    if (el.gender === "Polygender") {
      polyGenderFE += 1;
    }
  });

  let maleBE, femaleBE, queerBE, aGenderBE, polyGenderBE;
  maleBE = femaleBE = queerBE = aGenderBE = polyGenderBE = 0;

  backend.map((el) => {
    studentsAge.push(el.age);

    if (el.gender === "Male") {
      maleBE += 1;
    }
    if (el.gender === "Female") {
      femaleBE += 1;
    }
    if (el.gender === "Genderqueer") {
      queerBE += 1;
    }
    if (el.gender === "Agender") {
      aGenderBE += 1;
    }
    if (el.gender === "Polygender") {
      polyGenderBE += 1;
    }
  });

  let maleCL, femaleCL, queerCL, aGenderCL, polyGenderCL;
  maleCL = femaleCL = queerCL = aGenderCL = polyGenderCL = 0;

  const genderCL = [];

  cloud.map((el) => {
    studentsAge.push(el.age);

    if (el.gender === "Male") {
      maleCL += 1;
    }
    if (el.gender === "Female") {
      femaleFE += 1;
    }
    if (el.gender === "Genderqueer") {
      queerCL += 1;
    }
    if (el.gender === "Agender") {
      aGenderCL += 1;
    }
    if (el.gender === "Polygender") {
      polyGenderCL += 1;
    }
  });

  const genderr = [
    {
      name: "Frontend",
      male: maleFE,
      female: femaleFE,
      queer: queerFE,
      agender: aGenderFE,
      polyGender: polyGenderFE,
      total: frontend.length,
    },
    {
      name: "Backend",
      male: maleBE,
      female: femaleBE,
      queer: queerBE,
      agender: aGenderBE,
      polyGender: polyGenderBE,
      total: backend.length,
    },
    {
      name: "Cloud",
      male: maleCL,
      female: femaleCL,
      queer: queerCL,
      agender: aGenderCL,
      polyGender: polyGenderCL,
      total: cloud.length,
    },
    {
      name: "Total",
      male: maleBE + maleCL + maleFE,
      female: femaleFE + femaleBE + femaleCL,
      queer: queerFE + queerBE + queerCL,
      agender: aGenderBE + aGenderFE + aGenderCL,
      polyGender: polyGenderFE + polyGenderBE + polyGenderCL,
      total: frontend.length + backend.length + cloud.length,
    },
  ];

  //MAP AGE

  frontend.map((el) => {
    studentsAge.push(el.age);
  });

  backend.map((el) => {
    studentsAge.push(el.age);
  });

  cloud.map((el) => {
    studentsAge.push(el.age);
  });

  let max = studentsAge[0];

  for (let i = 1; i < studentsAge.length; i++) {
    if (max < studentsAge[i]) {
      max = studentsAge[i];
    }
  }

  // minimum age
  let min = studentsAge[0];

  for (let i = 1; i < studentsAge.length; i++) {
    if (min > studentsAge[i]) {
      min = studentsAge[i];
    }
  }

  //average age
  const average = Math.trunc(
    studentsAge.reduce((total, initial) => {
      return total + initial;
    }, 0) / studentsAge.length
  );

  console.log(min, max, average);

  let generatedHTML = "";
  generatedHTML += `
    <tr>
      <td>
      ${min}
      </td>
      <td>
      ${max}
      </td>
      <td>
      ${average}
      </td>
    </tr>
  `;

  ageRow.innerHTML = generatedHTML;

  generateGender(genderr);
  generateStudent(frontend, row1);
  generateStudent(backend, row2);
  generateStudent(cloud, row3);
}

const generateStudent = (track, rows) => {
  let generatedHTML = "";
  track.map((result) => {
    generatedHTML += repeatHTML(result);
  });
  rows.innerHTML = generatedHTML;
};
const generateGender = (gender) => {
  let generatedHTML = "";
  gender.map((result) => {
    generatedHTML += repeatContent(result);
  });
  genderRow.innerHTML = generatedHTML;
};

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
