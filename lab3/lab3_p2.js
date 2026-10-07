class UserRequest {
    constructor(lastName, firstName, age, education, symbNum, dateInput, time) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.education = education;
        this.symbNum = symbNum;
        this.date = new Date(dateInput);
        this.time = time;
    }
}


let userRequests = [
    new UserRequest("Silverhand", "Johny", 55, "Master's", 100, "2026-01-01", "10:00"),
    new UserRequest("Osaka", "Naomi", 25, "Bachelor's", 200, "2026-08-11", "11:00"),
    new UserRequest("Campbell", "Michael", 35, "PhD", 150, "2026-06-03", "12:00"),
    new UserRequest("Raikkonen", "Kimi", 28, "PhD", 120, "2024-12-04", "13:00"),
    new UserRequest("Russell", "George", 29, "Master's", 180, "2026-06-05", "14:00"),
    new UserRequest("Jones", "Sarah", 56, "Bachelor's", 90, "2025-08-19", "15:00"),
    new UserRequest("Hamilton", "Lewis", 30, "Master's", 110, "2024-03-07", "16:00"),
    new UserRequest("Verstappen", "Max", 26, "Bachelor's", 130, "2025-11-16", "17:00"),
    new UserRequest("Ohtani", "Shohei", 32, "Master's", 140, "2026-09-09", "18:00"),
    new UserRequest("D'Ark", "Joan", 19, "High School", 80, "2026-02-08", "19:00")
];


function findMonthAndTime(users, targetMonth, targetTime) {
    return users.filter(user => {
        let userMonth = user.date.getMonth() + 1;
        return userMonth === targetMonth && user.time === targetTime;
    });
}

let result = findMonthAndTime(userRequests, 11, "17:00");
console.log(result);


let sortedBySumNum = [...userRequests].sort((a, b) => b.symbNum - a.symbNum);
let maxSymbNum = sortedBySumNum[0];
console.log("Max length 'detailed':", maxSymbNum.symbNum);
console.log("Age of user:", maxSymbNum.age);
console.log("Education:", maxSymbNum.education);


function getSeason(month){
    if (month === 12 || month === 1 || month === 2) return "Winter";
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    return "Fall";
}

let classCounter = {"Business-Active": 0, "Business-Passive": 0, "Others": 0};

userRequests.forEach(user => {
    let season = getSeason(user.date.getMonth() + 1);
    let isActive = user.age >= 35 && user.age <= 55 && season !== "Summer";
    let isPassive = user.age >= 55 && season === "Summer";

    if (isActive) {
        classCounter["Business-Active"]++;
    } 
    else if (isPassive) {
        classCounter["Business-Passive"]++;
    }
    else {
        classCounter["Others"]++;
    }
});
console.log(classCounter);


let sortedByAlphabet = [...userRequests].sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
});

let currentDate = new Date();
sortedByAlphabet.forEach(user => {
    let birthYear = currentDate.getFullYear() - user.age;
    console.log(`Name: ${user.firstName} ${user.lastName}, Birth Year: ${birthYear}`)
});
