
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
  
        response.textContent = `Thanks for your message, ${name}! I will get back to you at ${email}.`;
        form.reset();
      });
    }
  
    const bmiButton = document.getElementById("bmiButton");
    if (bmiButton) {
      bmiButton.addEventListener("click", calculateBMI);
    }
  });
  
  
  function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("bmiResult");
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = "Please enter valid height and weight.";
      return;
    }
  
    const bmi = weight / ((height / 100) ** 2);
    let category = "";
  
    if (bmi < 18.5) category = "girl u should eat more!";
    else if (bmi < 25) category = "girl u slayyy";
    else if (bmi < 30) category = "girl u beautiful but u should care about ur health";
    else category = "Obese";
  
    result.textContent = `Your BMI is ${bmi.toFixed(1)}. Category: ${category}.`;
  }
