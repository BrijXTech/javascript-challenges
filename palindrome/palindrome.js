function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to its reversed version
    return cleanedString === reversedString;
}

const inputString1 = "BrijXTech";
const inputString2 = "MADAM";

const result1 = isPalindrome(inputString1);
const result2 = isPalindrome(inputString2);

console.log(result1); // Output: false
console.log(result2); // Output: true

