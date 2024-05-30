document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = weight / (height * height);

    document.getElementById('bmiResult').textContent = bmi.toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else if (bmi >= 30) {
        category = 'Obesity';
    }

    document.getElementById('bmiCategory').textContent = category;
}
