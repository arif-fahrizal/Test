const ps = require('prompt-sync')
const prompt = ps()

let nFamilies = prompt('Input the number of families: ')
let nMembers = prompt('Input the number of members in the family: ')

const members = nMembers.split("").map((a) => Number(a));
const buses = Math.ceil(members.reduce((a, b) => a + b) / 4);

if (members.length !== members.length) {
    console.log("Input must be equal with count of family");
} else {
    console.log(`Minimum bus required is: ${buses}`);
}