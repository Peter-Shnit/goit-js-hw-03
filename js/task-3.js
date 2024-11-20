
                        //  Спосіб №1

// function checkForSpam(message) {
//     const normMessage = message.toLowerCase();
//     const hasSpam = normMessage.includes("spam");
//     const hasSale = normMessage.includes("sale");

// if (hasSpam) {
//         return true;
//     }
//     else if (hasSale) {
//         return true;
//     }
//     else { return false; }
// }

                        //  Спосіб №2

// function checkForSpam(message) {
//     const normMessage = message.toLowerCase();
//     if (normMessage.includes("spam")) {
//         return true;
//     }
//     else if (normMessage.includes("sale")) {
//         return true;
//     }
//     else { return false; }
// }

                        // Спосіб №3

function checkForSpam(message) {
    const hasSpam = "spam";
    const hasSale = "sale";
    const normMessage = message.toLowerCase();

    if (normMessage.includes(hasSpam)) {
        return true;
    }
    else if (normMessage.includes(hasSale)) {
        return true;
    }
    else { return false; }
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true