const age = 50
// const age = 5
// const age = 65

const student = false
// const student = true 

let fare = 80

if (age < 10) {
     console.log('Fare is not required')
}

 else if (student == true) {
    fare = (fare*50)/100
    console.log(fare)  
}

else if (age >= 60) {
    fare = (fare*15)/100
    console.log(fare)
}

else {
    console.log("800tk")
}

