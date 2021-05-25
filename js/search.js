const dataDiv = document.querySelector('.data-div')
const searchByName = document.querySelector('#searchByName')
const searchByDesignation = document.querySelector('#searchByDesignation')
const searchByDepartment = document.querySelector('#searchByDepartment')
const searchForm = document.querySelector('#searchForm')

var employees = db.collection('employees')

//Render Employees to Table
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

//getAllEmployeesData()

//Get Query Employees
const getDataByName = async (name) => {
  count = 0
  const data = await employees.where('name', '==', name).get()
  data.forEach((doc) => {
    count = count + 1
    renderEmployees(doc, count)
  })
}
const getDataByDesignation = async (designation) => {
  count = 0
  const data = await employees.where('designation', '==', designation).get()
  data.forEach((doc) => {
    count = count + 1
    renderEmployees(doc, count)
  })
}
const getDataByDepartment = async (department) => {
  count = 0
  const data = await employees.where('department', '==', department).get()
  data.forEach((doc) => {
    count = count + 1
    renderEmployees(doc, count)
  })
}

//Form Submit
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  dataDiv.textContent = ''

  if (
    searchByName.value == '' &&
    searchByDesignation.value == '' &&
    searchByDepartment.value == ''
  ) {
    alert('All the Search Boxes are Empty, Please Enter some Search Query!')
  } else if (
    searchByName.value !== '' &&
    searchByDesignation.value == '' &&
    searchByDepartment.value == ''
  ) {
    getDataByName(searchByName.value.toLowerCase())
  } else if (
    searchByName.value == '' &&
    searchByDesignation.value !== '' &&
    searchByDepartment.value == ''
  ) {
    getDataByDesignation(searchByDesignation.value.toLowerCase())
  } else if (
    searchByName.value == '' &&
    searchByDesignation.value == '' &&
    searchByDepartment.value !== ''
  ) {
    getDataByDepartment(searchByDepartment.value.toLowerCase())
  } else {
    alert('Under Progress')
  }
})
