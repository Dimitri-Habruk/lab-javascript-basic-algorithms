// Iteration 1: Names and Input
let hacker1 = 'Marko';
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Polo';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)} else{
        console.log(` Wow, you both have equally long names, ${hacker2.length ||hacker1.length } characters!`);
    }

// Iteration 3: Loops
// 3.1
let hackerWithEspace = ''
for(i = 0; i < hacker1.length; i++){
    hackerWithEspace += `${hacker1[i].toUpperCase()} `
}
console.log(hackerWithEspace)

// 3.2
let hacker2reverse = ''
for(i = hacker2.length -1; i >= 0; i--){
    hacker2reverse += `${hacker2[i]}`
}
console.log(hacker2reverse)

// 3.3

let hacker1compare = hacker1; 
let hacker2compare = hacker2; 


if(hacker1.localeCompare(hacker2) == 1){
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) == -1 ){
    console.log("Yo, the navigator goes first definitely.")
}else {
    console.log('What?! You both have the same name?')
}