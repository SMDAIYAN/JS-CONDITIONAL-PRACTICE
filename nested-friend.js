let myScore = 85;
let friendsScore = 70;

if (myScore>80) {
    if (friendsScore>80) {
        console.log("let's go for a lunch")   
    }

    else if (friendsScore<80 && friendsScore>=60) {
        console.log("good luck next time")
    }
    else if (friendsScore<60 && friendsScore>=40) {
        console.log("I won't see your message")
    }
    else if (friendsScore<40) {
        console.log("Blocked")
    }
}
