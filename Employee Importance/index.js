function getImportance(employees, id) {
    const employeeMap = new Map();
    
    // Build a map of employees by their ID
    for (const employee of employees) {
      employeeMap.set(employee.id, employee);
    }
    
    // Recursively calculate the importance value of the given employee and their subordinates
    function calculateImportance(id) {
      const employee = employeeMap.get(id);
      let totalImportance = employee.importance;
      
      for (const subordinateId of employee.subordinates) {
        totalImportance += calculateImportance(subordinateId);
      }
      
      return totalImportance;
    }
    
    // Call the recursive function with the given employee ID
    return calculateImportance(id);
  }
  