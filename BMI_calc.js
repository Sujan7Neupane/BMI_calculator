let weightInput = document.querySelector("#number-kg");
let numberInput = document.querySelector("#number-m");
let calcBtn = document.querySelector(".calcBtn");
let showResult = document.querySelector("#showBMI");

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let BMIresult = parseFloat(
    weightInput.value / (numberInput.value * numberInput.value)
  ).toFixed(2);
  // console.log(BMIresult);

  let category;
  if (BMIresult < 18.5) {
    category = "underweight";
  } else if (BMIresult >= 18.5 && BMIresult < 25) {
    category = "normal weight";
  } else if (BMIresult >= 25 && BMIresult < 30) {
    category = "overweight";
  } else if (BMIresult >= 30) {
    category = "obese";
  }
  // Your BMI is {}. You are {}
  showResult.textContent = `Your BMI is ${BMIresult}. You are ${category}`;
});
