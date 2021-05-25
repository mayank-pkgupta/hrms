var employees = db.collection('employees')

const countDiv = document.querySelector('.card-title')

const getAllEmployeesCount = async () => {
  count = 0
  const data = await employees.get()
  const size = data.size
  countDiv.textContent = size
}

getAllEmployeesCount()
