function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = "BrijXTech";
const reversedString = reverseString(inputString);

console.log(reversedString); // Output: "hceTXjirB"