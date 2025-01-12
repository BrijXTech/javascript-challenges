function findLargestNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array.");
    }
    return arr.reduce((max, num) => (num > max ? num : max), -Infinity);
  }
  
  // Example Usage
  const numbers = [34, 67, 12, 89, 23];
  console.log(findLargestNumber(numbers)); // Output: 89
  