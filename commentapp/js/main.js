
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

	if(dd<10) {
   	 dd='0'+dd
	} 
	if(mm<10) {
  	  mm='0'+mm
	} 
today = mm+'/'+dd+'/'+yyyy;

document.getElementById("date").textContent = today


function getInfo(){
	//create username and comment
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	// create textNode
	var userNameText = document.createTextNode("username: " + username)
	var commentText = document.createTextNode("comment: " + comment)
	//create a new list
	var newLi = document.createElement("li")
	newLi.className = "list items"
	// create a new img tag
	var newImg = document.createElement("img")
	newImg.className = "image"
	// set the image attribute
	newImg.setAttribute("src", "img/usericon.png")
	// append the new image to id=list
	var list = document.getElementById("list")
	list.appendChild(newImg)
	//create a new h4
	var newUserName = document.createElement("h4")
	// append the text to the h4
	newUserName.appendChild(userNameText)
	//create a new p	
	var newComment = document.createElement("p")
	// append the text to the p
	newComment.appendChild(commentText)
	// append the newusername and newcomment to the newli 
	newLi.appendChild(newUserName)
	newLi.appendChild(newComment)
	document.getElementById("list").appendChild(newLi)
	
}