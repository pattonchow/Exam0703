import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

//Question 1
function add2(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

const result = add2(2)(3)(4);
console.log("Q1 test result: " + result); // Output: 9

//Question 3
function countRods(input) {
  const result = [];

  while (input.length > 0) {
    const count = input.length; // Count the number of rods
    result.push(count); // Record the count at the beginning of each round

    const shortestLength = Math.min(...input); // Find the shortest length
    const shortestRods = input.filter((length) => length === shortestLength); // Find the rods with the shortest length

    input = input.filter((length) => length !== shortestLength); // Discard rods with the shortest length

    input = input.map((length) => length - shortestLength); // Cut the shortest length from longer rods

    input = input.filter((length) => length > 0); // Discard all offcuts
  }

  return result;
}

// Example usage:
const input = [1, 1, 3, 4];
const output = countRods(input);
console.log("Q3 test result:" + output); // Output: [4, 2, 1]
