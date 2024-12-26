document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid numbers.");
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const tableBody = document.getElementById("gradesTableBody");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    updateAverages();
});

function updateAverages() {
    const rows = document.querySelectorAll("#gradesTableBody tr");
    let mathSum = 0, englishSum = 0, overallSum = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        mathSum += parseFloat(cells[0].textContent);
        englishSum += parseFloat(cells[1].textContent);
        overallSum += parseFloat(cells[2].textContent);
    });

    const rowCount = rows.length;
    document.getElementById("mathAverage").textContent = (mathSum / rowCount).toFixed(2);
    document.getElementById("englishAverage").textContent = (englishSum / rowCount).toFixed(2);
    document.getElementById("overallAverage").textContent = (overallSum / rowCount).toFixed(2);
}
