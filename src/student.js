function calculateGrade() {
    // Get the input element
    const marksInput = document.getElementById('marks');
    
    // Get the value of the input
    const marks = Number(marksInput.value);
    
    // Determine the grade based on the input marks
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    
    // Output the grade to the user
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The student's grade is ${grade}.`;
    
    // Adding event listener
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault()
    });
    console.log(form);
  }
  