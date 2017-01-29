// var lionsleeps ="the lion sleeps tonight"
// function inthejungle(lionsleeps){
// 	alert("O-wim-o-weh-o-wim-o-weh. In the jungle, the mighty jungle..." + lionsleeps)
// }
// inthejungle(lionsleeps)

var animal=document.getElementsByClassName("animal")
console.log(animal)
var Exhibits=document.getElementById("Exhibits")
console.log(Exhibits)

function getRandomAnimal(){
	//get a random animal
	//store the animal as a variable
	var random = prompt("Welcome to Zootopia")
	console.log(random)
	//change the random animal to the user's input
	var Exhibits=document.getElementById("Exhibits")
	Exhibits.textContent=random;}

	// if value of random is empty
	if (random == '') {
		//do something
		console.log("random is not set")
		Exhibits.textContent = "Exhibits"
	//if value of random is entered
	} else {
		//do something else
		Exhibits.textContent = random;
		console.log("random is set")

	}
getRandomAnimal()