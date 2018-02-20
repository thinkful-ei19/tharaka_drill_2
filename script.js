let jediName = function(firstName, lastName) {

	let fName = firstName.split('').slice(0,2).join('');
	let lName = lastName.split('').slice(0,3).join('');
	
	return lName + fName;
}



let beyond = function(num) {

	if(!isFinite(num)) {

		console.log('And beyond');

	} else if(num > 0) {

		console.log('To infinity');

	} else if(num < 0) {

		console.log('To negative infinity');

	} else if(num === 0){

		console.log('Staying home');

	}

}



let decode = function(word) {
	
	let wordList = word.split(' ');
	let finalWord = '';

	for(let i = 0; i < wordList.length; i++) {
		let firstLetter = wordList[i][0].toLowerCase();

		if(firstLetter === 'a') {

			finalWord += wordList[i][1];

		} else if(firstLetter === 'b') {

			finalWord += wordList[i][2];

		} else if(firstLetter === 'c') {

			finalWord += wordList[i][3];

		} else if(firstLetter === 'd') {

			finalWord += wordList[i][4];

		} 

	}
	
	return finalWord;

}



let daysInMonth = function(month, leapYear) {
	let result = '';

	switch(month) {
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
			result = `${month} has 31 days`;
			break;
		case 'April':
		case 'June':
		case 'September':
		case 'November':
			result = `${month} has 30 days`;
			break;
		case 'February':
			if(leapYear) {
				result = `${month} has 29 days`;
			} else {
				result = `${month} has 28 days`;
			}
			break;
		default:
			result = 'Must provide a valid month.';
	}

	return result;
}









let ans1 = jediName('thara', 'wije');
let ans2 = beyond(0);
let ans3 = decode('craft block argon meter bells brown croon droop');
let ans4 = daysInMonth('February', true);

