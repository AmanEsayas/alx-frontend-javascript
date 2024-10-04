export default function iterateThroughObject(reportWithIterator) {
  const employeesList = [...reportWithIterator];
  return employeesList.join(' | ');
}

