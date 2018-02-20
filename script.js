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

		} else {
			finalWord += ' ';
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



let rockPaperScissors = function(num) {

	const randomNo = Math.floor(Math.random() * 3) + 1;
	let outcome = '';

	switch(randomNo) {

		case 1:
			if(num === 1) {
				outcome = 'The result is a tie';
			} else if(num === 2) {
				outcome = 'You won!'
			} else if(num === 3) {
				outcome = 'You lost'
			} else {
				outcome = 'Invalid number'
			}

			break;

		case 2:
			if(num === 1) {
				outcome = 'You lost';
			} else if(num === 2) {
				outcome = 'The result is a tie'
			} else if(num === 3) {
				outcome = 'You won!'
			} else {
				outcome = 'Invalid number'
			}

			break;

		case 3:
			if(num === 1) {
				outcome = 'You won!';
			} else if(num === 2) {
				outcome = 'You lost'
			} else if(num === 3) {
				outcome = 'The result is a tie'
			} else {
				outcome = 'Invalid number'
			}

			break;		

	}

	return outcome;
}









let ans1 = jediName('thara', 'wije');
let ans2 = beyond(0);
let ans3 = decode('craft block argon meter bells brown croon droop');
let ans4 = daysInMonth('February', true);
let ans5 = rockPaperScissors(2);

