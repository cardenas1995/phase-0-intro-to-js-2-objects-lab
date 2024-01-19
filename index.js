const employee = {
  name: 'John Doe',
  age: 30,
  position: 'Developer'
};

describe('employees', function() {
 
});

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee }; 

  updatedEmployee[key] = value;

  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; 

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const clonedEmployee = { ...employee }; 

  delete clonedEmployee[key]; 

  return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; 

  return employee;
}
