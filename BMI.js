// BMI Calculator and Health Catagory

let weight = 60;
let height = 1.8;

BMI = (weight / (height**2));

if (BMI < 18.5) {
    console.log('you are underweight')
}

else if (BMI >= 18.5 && BMI <=24.9) {
    console.log('you are normal')
}

else if (BMI >=25 && BMI <= 29.9) {
    console.log('you are overweight')
}
else {
    console.log('you are obese')
}
