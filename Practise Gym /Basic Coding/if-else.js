function assignGrades(score) {
  let grade;
  if (score <= 50) {
    grade = "D";
  } else if (score > 50 && score < 60) {
    grade = "C";
  } else if (score >= 60 && score <= 75) {
    grade = "B";
  } else if (score > 75) {
    grade = "A";
  }
  return grade;
}
console.log(assignGrades(45));
