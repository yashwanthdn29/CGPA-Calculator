function calculate() {
    // Get values from the input fields
    const creditsInput = document.getElementById('credits').value;
    const gradesInput = document.getElementById('grades').value;

    // Convert comma-separated strings into arrays of numbers
    const credits = creditsInput.split(',').map(Number);
    const grades = gradesInput.split(',').map(Number);

    // Validate inputs
    if (credits.length !== grades.length || creditsInput === "" || gradesInput === "") {
        document.getElementById('result').innerHTML = "<span style='color: red;'>Error: Number of credits and grades must match!</span>";
        return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    // Calculate weighted sum
    for (let i = 0; i < credits.length; i++) {
        if (isNaN(credits[i]) || isNaN(grades[i])) {
            document.getElementById('result').innerHTML = "<span style='color: red;'>Error: Please enter valid numbers.</span>";
            return;
        }
        totalPoints += credits[i] * grades[i];
        totalCredits += credits[i];
    }

    // Calculate and display CGPA
    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerHTML = `<h3>Your CGPA is: ${cgpa.toFixed(2)}</h3>`;
}