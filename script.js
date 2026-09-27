function calculate() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= 8; i++) {
        const creditInput = document.getElementById(`subject${i}-credit`);
        const gradeInput = document.getElementById(`subject${i}-grade`);

        const credit = Number(creditInput.value);
        const grade = Number(gradeInput.value);

        if (creditInput.value === "" || gradeInput.value === "") {
            document.getElementById('result').innerHTML = "<span style='color: red;'>Error: Please enter credits and grades for all 8 subjects.</span>";
            return;
        }

        if (isNaN(credit) || isNaN(grade) || credit <= 0 || grade < 0 || grade > 10) {
            document.getElementById('result').innerHTML = "<span style='color: red;'>Error: Please enter valid credits and grades.</span>";
            return;
        }

        totalPoints += credit * grade;
        totalCredits += credit;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerHTML = `<h3>Your CGPA is: ${cgpa.toFixed(2)}</h3>`;
}