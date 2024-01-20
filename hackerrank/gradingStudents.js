const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 >= 3 && grades[i] > 37)
      grades[i] = grades[i] + (5 - (grades[i] % 5));
  }
  return grades;
}

gradingStudents(grades);

