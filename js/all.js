const dataDiv = document.querySelector(".data-div");

var employees = db.collection("employees");

//Render All Employees to Table
const renderEmployees = (doc, sr) => {
  let tr = document.createElement("tr");
  let count = document.createElement("td");
  let name = document.createElement("td");
  let designation = document.createElement("td");
  let department = document.createElement("td");

  tr.setAttribute("data-id", doc.id);
  count.textContent = sr;
  name.textContent = doc.data().name;
  designation.textContent = doc.data().designation;
  department.textContent = doc.data().department;

  tr.appendChild(count);
  tr.appendChild(name);
  tr.appendChild(designation);
  tr.appendChild(department);

  dataDiv.append(tr);
};

const getAllEmployeesData = async () => {
  count = 0;
  const data = await employees.get();
  data.forEach((doc) => {
    count = count + 1;
    renderEmployees(doc, count);
  });
};

getAllEmployeesData();

//Get Query Employees
const getQueryEmployeesData = async () => {
  count = 0;
  const data = await employees
    .where("designation", "array-contains-any", ["Registrar"])
    .get();
  data.forEach((doc) => {
    count = count + 1;
    renderEmployees(doc, count);
  });
};
//getQueryEmployeesData()

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchByName");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//Search Functionality

// Search By Name
function searchByNameFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchByName");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Search By Designation
function searchByDesignationFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchByDesignation");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Search By Department
function searchByDepartmentFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchByDepartment");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
