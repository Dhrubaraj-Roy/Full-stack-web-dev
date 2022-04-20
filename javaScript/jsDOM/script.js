// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

//my code
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
}
function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
		createRemoveButton();

		
	}
}
function addListAfterKeypress(event){
	if(inputLength() > 0 && event.code === "Enter"){
		createListElement();
		createRemoveButton();
	}

}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);  
		input.value = "";
}
function createRemoveButton(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("remove"));
	ul.appendChild(button);
	button.id ="myBtn";
	input.value = "";
}

function createId(obj) {
	obj.id = "myList";
}
function removeTheItem(){
	console.log("ccc")
	var myList = document.getElementById("myList");
	myList.innerHTML = "";
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
// button.addEventListener("click", removeTheItem);
var btn2 = document.getElementById("myBtn");
btn2.addEventListener("click", removeTheItem);
// document.getElementById("myBtn").addEventListener("click", removeTheItem);