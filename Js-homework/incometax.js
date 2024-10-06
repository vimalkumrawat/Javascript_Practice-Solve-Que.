
let ctc = 700000
let incomeTax = 0
if (ctc <= 300000) {
    console.log("you dont have to pay any tax as your ctc is less than 3 lakh");
    console.log(incomeTax);
} else if (ctc > 300000 && ctc <= 700000) {
    incomeTax = (ctc - 300000) * 5 / 100
    console.log(incomeTax);
} else if (ctc > 700000 && ctc <= 1000000) {
    incomeTax = (ctc - 700000) * 10 / 100 + 20000
    console.log(incomeTax);
} else if (ctc > 1000000 && ctc <= 1200000) {
    incomeTax = (ctc - 1000000) * 15 / 100 + 50000
    console.log(incomeTax);
} else if (ctc > 1200000 && ctc <= 1500000) {
    incomeTax = (ctc - 1200000) * 20 / 100 + 80000
    console.log(incomeTax);
} else {
    incomeTax = (ctc - 1500000) * 30 / 100 + 140000
    console.log(incomeTax);
}

// explain the code line by line in hindi