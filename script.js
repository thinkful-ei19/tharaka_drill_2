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










let ans1 = jediName('thara', 'wije');
let ans2 = beyond(0);