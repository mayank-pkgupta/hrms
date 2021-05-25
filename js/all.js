const dataDiv = document.querySelector('.data-div')

var employees = db.collection('employees')

//Render All Employees to Table
const renderEmployees = (doc, sr) => {
  let tr = document.createElement('tr')
  let count = document.createElement('td')
  let name = document.createElement('td')
  let designation = document.createElement('td')
  let department = document.createElement('td')

  tr.setAttribute('data-id', doc.id)
  count.textContent = sr
  name.textContent = doc.data().name
  designation.textContent = doc.data().designation
  department.textContent = doc.data().department

  tr.appendChild(count)
  tr.appendChild(name)
  tr.appendChild(designation)
  tr.appendChild(department)

  dataDiv.append(tr)
}

const getAllEmployeesData = async () => {
  count = 0
  const data = await employees.get()
  data.forEach((doc) => {
    count = count + 1
    renderEmployees(doc, count)
  })
}

getAllEmployeesData()

//Get Query Employees
const getQueryEmployeesData = async () => {
  count = 0
  const data = await employees
    .where('designation', 'array-contains-any', ['Registrar'])
    .get()
  data.forEach((doc) => {
    count = count + 1
    renderEmployees(doc, count)
  })
}
//getQueryEmployeesData()
