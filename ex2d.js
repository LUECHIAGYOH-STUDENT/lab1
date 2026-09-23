// Multiplies every number under 70 in the array by 2, using .map().
// Numbers 70 or above are unchanged.

let ages = [3, 451, 341, 4];

let myArray = ages.map(
    (age) => {
        if (age < 70) {
            return age * 2; // Double values under 70
        } else {
            return age;     // Leave values 70 and above as they are
        }
    }
)

console.log(myArray); // Logs the resulting mapped array
