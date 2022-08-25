let womenInTech = ["Ruby", "Effie", "Alex", "Harriet"];

let ages = [31, 19, 21, 64];

// To access an array item by the index number
// console.log(womenInTech[0]);

// ages.sort();

// console.log(ages);

// womenInTech.pop();
// womenInTech.push("Amy");

// console.log(womenInTech);

function welcomeMessage(person){
    console.log("Welcome to the CLG community, "+ person +". We're so glad you're here")
}

womenInTech.forEach(welcomeMessage);

function awardsOver30(recepient){
    return recepient >= 30;
}

console.log(ages.filter(awardsOver30));