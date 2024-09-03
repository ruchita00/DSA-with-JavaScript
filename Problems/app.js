/**
 * create an array with 5 students names after that create a function
 * whic takes 2 parameters (allstudents and studentNAME)
 * iterate over all students and find the specific studentName
 *
 */

const array = ["ruchita", "chiku", "adu", "sharon", "sonal"];

function findStudentName(allstudents, studentName) {
  for (let i = 0; i < allstudents.length; i++) {
    if (allstudents[i] === studentName) {
      console.log(studentName);
    }
  }
}

findStudentName(array, "adu");
