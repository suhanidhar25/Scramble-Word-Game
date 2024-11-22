// script.js 

const words = [ 
	"vanilla",
	"python",
	"facebook",
]; 

// Respective list of hints 
const hints = [ 
	"ice cream flavour",
	"programming language",
	"social media app",
]; 

// Initialize display word 
let displayWord = ""; 

// Function to shuffle letters 
function shuffle(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		// Swap letters 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 

// Function to check input and display result 
function check() { 
	let input = document.getElementById("input"); 
	let output = document.getElementById("output"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) 
		output.innerHTML = "Result: Correct"; 
	else output.innerHTML = "Result: Incorrect"; 
} 

// To refresh and show new word 
function refresh() { 
	index = Math.floor(Math.random() * 5); 
	displayWord = words[index]; 
	displayHint = hints[index]; 
	scrambleWord = 
		document.getElementById("scrambleWord"); 
	scrambleWord.innerText = 
		shuffle(displayWord).toUpperCase(); 
	let hint = document.getElementById("hint"); 
	hint.innerHTML = "<b>Hint:</b> " + displayHint; 
	document.getElementById("output").innerText = "Result:"; 
} 

// Function call when page load for first time 
refresh();
