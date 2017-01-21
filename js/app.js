/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
var nameElement = document.getElementById("name1");
nameElement.innerHTML = "Tay-Tay";

/*2. Replace the n/a with the following: 

Project Manager*/
var positionElement = document.getElementById("position2");
positionElement.innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/
var aliasElement = document.getElementById("alias3");
aliasElement.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var profileElement = document.getElementsByClassName("profile");
profileElement[0].innerHTML = "Lorizzle its fo rizzle we gonna chung sit amizzle, sizzle adipiscing elit.";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

profileElement[2].innerHTML = "And you will know My name is the Lord when I lay My vengeance upon thee.";
  

/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var newChuck = document.createElement("div");
newChuck.id = "name7";
newChuck.innerHTML = "Chuck Norris";
nameBox.appendChild(newChuck);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var alias8 = document.createElement("div");
alias8.id = "alias8";
alias8.innerHTML = "Purple Monster";
aliasBox.appendChild(alias8);

//Final Boss
/*8. Create your own profile.*/

var newName = document.createElement("div");
var newPosition = document.createElement("div");
var newAlias = document.createElement("div");
var newBio = document.createElement("div");

newName.className = "name";
newPosition.className = "position";
newAlias.className = "alias";
newBio.className = "profile";

newName.innerHTML = "Dakota";
newPosition.innerHTML = "Software Engineer";
newAlias.innerHTML = "Javascript Messiah";
newBio.innerHTML = "lorem ipsum";

var newProfile = document.getElementsByClassName("block3 col-sm-4")[2];
newProfile.appendChild(newName);
newProfile.appendChild(newPosition);
newProfile.appendChild(newAlias);
newProfile.appendChild(newBio);