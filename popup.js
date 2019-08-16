// Defining and setting default spongebobified text programmatically
let defaultOutput = "yOUR SPONgebObifIEd tExT wIlL aPpeAR HeRe"
document.getElementById('outputDiv').innerHTML = defaultOutput

// function that takes a string and attempts to spongebobify it
// split by character, then randomly vary case, then join
function spongebobifyText(str) {
	return str.split("").map(letter => Math.floor(Math.random() * 2) === 0 ? letter.toLowerCase() : letter.toUpperCase()).join("")
}

document.getElementById('submitBtn').addEventListener('click', function(){
	let userInput = document.getElementById('userInput').value
	
	// Check for empty string and set default output if necessary
	document.getElementById('outputDiv').innerHTML = userInput === "" ? 
	defaultOutput : spongebobifyText(document.getElementById('userInput').value);
}); 