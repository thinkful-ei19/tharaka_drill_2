function jediName(firstName, lastName) {

	let fName = firstName.split("").slice(0,2).join("");
	let lName = lastName.split("").slice(0,3).join("");
	
	return lName + fName;
}

let ans1 = jediName("thara", "wije");