console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;



//created makemiddleearth function that, when called, fills in missing pieces of middle earth
var makeMiddleEarth = function() {
	//creates a new section & gives it an id of 'middle-earth'
	let newSection = document.createElement('section');
	newSection.id = "middle-earth";
	//loops through the lands array, creating new article and h1 tags and appending them to the section
	for (let i = 0; i < lands.length; i++) {
		let tempArticle = document.createElement('article');
		let newLand = document.createElement('h1');
		newLand.innerHTML = lands[i];
		tempArticle.appendChild(newLand);
		newSection.appendChild(tempArticle);
	}
	//appends the entire section to the body of the document
	document.body.appendChild(newSection);
}


//created makehobbits function that, when called, finds the shire (the 1st article tag) and creates an unordered list and list items that display the hobbit's names
var makeHobbits = function() {
	//get the shire (1st article tag)
	let theHobs = document.querySelectorAll('article')[0];
	//create new UL
	let newUl = document.createElement('ul');
	//loop through hobbit array and create new Li elements, assigning them to each along with the class of hobbit
	for (let i = 0; i < hobbits.length; i++) {
		let tempLi = document.createElement('li');
		tempLi.className = 'hobbit';
		tempLi.innerHTML = hobbits[i];
		newUl.appendChild(tempLi);
	}
	//append the whole UL to the shire
	theHobs.appendChild(newUl);
}


//created function that adds ring div to frodo li
var keepItSecretKeepItSafe = function() {
	//creates ring div
	let newDiv = document.createElement('div');
	//assign it id and class
	newDiv.id = 'the-ring';
	newDiv.class = 'magic-imbued-jewelry';
	//find frodo li 
	let ringFrodo = document.getElementsByTagName('li')[0];
	//append ring div to frodo
	ringFrodo.appendChild(newDiv);
}


//created make buddies function for storing a list of buddies met along the adventure
var makeBuddies = function() {
	//create two new elements, an aside tag to hold the list and a ul tag to hold the li elements
	let asideTag = document.createElement('aside');
	let newUl = document.createElement('ul');
	//loop through the buddies array and create new li for each, assigning their name to the innerhtml then appending them to the ul
	for (let i = 0; i < buddies.length; i++) {
		let newLi = document.createElement('li');
		newLi.innerHTML = buddies[i];
		newUl.appendChild(newLi);
	}
	//appendchild the ul and and aside
	asideTag.appendChild(newUl);
	document.body.appendChild(asideTag);
}


//created function to find and change strider to aragorn
var beautifulStranger = function() {
	//get parent element
	let changeStrider = document.getElementsByTagName('aside');
	//dig deep and reassign several children deep, im sure theres a better way to do this
	changeStrider[0].childNodes[0].childNodes[3].innerHTML = 'Aragorn';
}


//created a fuction that moves the ul containing the hobbits from one article tag (the shire) to another (rivendell)
var leaveTheShire = function() {
	//find next article tag (rivendell)
	let rivendell = document.getElementsByTagName('article')[1];
	// console.log(rivendell);
	//find hobbit ul
	let allHobbits = document.getElementsByTagName('ul')[0];
	// console.log(allHobbits);
	//append hobbits to rivendell which moves the damn thing
	rivendell.appendChild(allHobbits);
}


//created a function that creates a new div inside the rivendell article tag, then moves all the adventurers and buddies into this new div in a new ul
var forgeTheFellowShip = function() {
	//get rivendell article
	let rivendell = document.getElementsByTagName('article')[1];
	//create new div to append to rivendell
	let fellowShip = document.createElement('div');
	//get ALL list items (this will return a node list)
	let adventurers = document.querySelectorAll('li');
	// console.log(adventurers);
	//convert the node list into an array using the .from method of the Array object
	let theParty = Array.from(adventurers);
	// console.log(theParty);
	//create a new ul to store all the li from the nodelist
	let newList = document.createElement('ul');
	//loop through the node list of all li items and assign them to the new ul within the div
	for (let i = 0; i < theParty.length; i++) {
		let tempPartyMember = theParty[i];
		// console.log(tempPartyMember);
		newList.appendChild(tempPartyMember);
		let memberName = tempPartyMember.innerText;
		console.log(memberName+' has joined the party!');
	}
	//append the ul to the div and the div to the rivendell article
	fellowShip.appendChild(newList);
	rivendell.appendChild(fellowShip);
}


//made a balrog function that finds gandalf in the ul and applies style changes to his tag
var theBalrog = function() {
	//find gandalf in the ul
	let newGandalf = document.getElementsByTagName('li')[4];
	//apply style changes to his li
	newGandalf.innerHTML = 'Gandalf the White';
	newGandalf.style.backgroundColor = 'white';
	newGandalf.style.border = '1px solid grey';
}


//created a function that produces 2 alerts and then removes the boromir li item 
var hornOfGondor = function() {
	//show alerts
	alert('The Horn of Gondor has been blown!');
	alert('Boromir has been killed by the Uruk\'hai!');
	//select the boromir li item
	let deadBoromir = document.getElementsByTagName('li')[8];
	//traverse the DOM up to the parent node (ul) of boromir's li item, then use removeChild method in conjunction with the variable assigned to boromir's li location to remove boromir's li
	deadBoromir.parentNode.removeChild(deadBoromir);
}


//created function to move frodo and sam li elements to morder article and create new div with an id called mount-doom
var itsDangerousToGoAlone = function() {
	let frodoLeaves = document.querySelectorAll('li')[0];
	let samLeaves = document.querySelectorAll('li')[1];
	let moveToMorder = document.querySelectorAll('article')[2];
	moveToMorder.appendChild(frodoLeaves);
	moveToMorder.appendChild(samLeaves);
	let mntDoom = document.createElement('div');
	mntDoom.id = "mount-doom";
	moveToMorder.appendChild(mntDoom);
}


//creats a div for gollum and appended it to mordor article and moved the-ring div to it
var weWantsIt = function() {
	//create gollum & assign him an id
	let gollumDiv = document.createElement('div');
	gollumDiv.id = "gollum";
	//get mordor
	let morderArticle = document.querySelectorAll('article')[2];
	//move gollum to mordor and the-ring to gollum
	morderArticle.appendChild(gollumDiv);
	let oneRing = document.getElementById('the-ring');
	gollumDiv.appendChild(oneRing);
}


//created a function that removes gollum and the ring divs completely, and gets all li with a class 'hobbit' and moves them back to the shire
var thereAndBackAgain = function() {
	//get gollum and remove the ring from inside his div, then use parentnode and remove child method to remove gollum
	let gollumDiv = document.getElementById('gollum');
	gollumDiv.innerHTML = "";
	gollumDiv.parentNode.removeChild(gollumDiv);
	//get all li with class 'hobbit' and convert the HTML collection into an array, also get the shire article element and create a new ul
	let allHobbits = document.getElementsByClassName('hobbit');
	let theShire = document.getElementsByTagName('article')[0];
	let hobbArray = Array.from(allHobbits);
	let newUl = document.createElement('ul');
	//loop through the hobbit array and append each of them to the new ul, then append the hobbit list to the shire, returning them home
	for (let i = 0; i < hobbArray.length; i++) {
		newUl.appendChild(hobbArray[i]);
	}
	theShire.appendChild(newUl);
}










makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();















