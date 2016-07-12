function Shoes(name, size, color, image){
  this.name = name;
  this.size = size;
  this.color = color;
  this.image = image;
}

var shoesArray = []
  var rising = new Shoes ("rising", [10, 12, 14], "yellow", "img/jordanrising.jpg")
  var retro = new Shoes ("retro", 40, "blue", "img/jordanretro.jpg")
  var jumpman = new Shoes ("jumpman", 40, "black", "img/jordanjumpman.jpg")
  var galaxy = new Shoes ("galaxy", 40, "white", "img/jordangalaxy.jpg")
  var reveal = new Shoes ("reveal", 40, "black", "img/jordanreveal.jpg")
  var jordan = new Shoes ("CP3IX", 40, "black", "img/jordanCP3IX.jpg")
  var flight = new Shoes ("runner", 40, "grey", "img/jordanflightrunner.jpg")
  var prem = new Shoes ("prem", 40, "blue", "img/jordanprem.jpg")
  var fly = new Shoes ("superfly", 40, "red", "img/jordansuperfly.jpg")

shoesArray.push(rising)
shoesArray.push(retro)
shoesArray.push(jumpman)
shoesArray.push(galaxy)
shoesArray.push(reveal)
shoesArray.push(jordan)
shoesArray.push(flight)
shoesArray.push(prem)
shoesArray.push(fly)

for (var i = 0; i < shoesArray.length; i++) {
    var sName = document.createTextNode(shoesArray[i].name)
    var sSize = document.createTextNode("Available size: ")
    var sColor = document.createTextNode("color: " + shoesArray[i].color)
    var option1Text = document.createTextNode("10")
    var option2Text = document.createTextNode("12")
    var option3Text = document.createTextNode("14")
    var myDiv = document.getElementById("shoes");
    var sButton = document.createTextNode("Buy Now!")
    var sImage = shoesArray[i].image
    var newCol = document.createElement("DIV")
    var newDiv = document.createElement("DIV")
    var nameH2 = document.createElement("H2")
    var sizeH4 = document.createElement("H4")
    var colorH4 = document.createElement("H4")
    var stockH4 = document.createElement("H4")
    var newSelect = document.createElement("select")
    var newOption1 = document.createElement("option")
    var newOption2 = document.createElement("option")
    var newOption3 = document.createElement("option")
    var buyNow = document.createElement("Button")
    var image = document.createElement("img")

    nameH2.appendChild(sName)
    sizeH4.appendChild(sSize)
    colorH4.appendChild(sColor)
    newOption1.setAttribute("name", "shoeSize")
    newOption1.setAttribute("value", "10")
    newOption2.setAttribute("name", "shoeSize")
    newOption2.setAttribute("value", "12")
    newOption3.setAttribute("name", "shoeSize")
    newOption3.setAttribute("value", "14")
    // checkbox.setAttribute("name", "dd");
    // checkbox.setAttribute("value", "ff");
    buyNow.appendChild(sButton)
    buyNow.className = "btn btn-primary btn-lg"
    newSelect.className = "btn-size"
    image.src = sImage
    image.className = "img-responsive"

    newCol.className = "col-sm-4"
    newDiv.className = "shoesName " + i + " thumbnail"
    newDiv.appendChild(nameH2)
    newDiv.appendChild(image)
    newDiv.appendChild(sizeH4)
    newDiv.appendChild(colorH4)
    newDiv.appendChild(newSelect)
    newDiv.appendChild(buyNow)
    newCol.appendChild(newDiv)
    newOption1.appendChild(option1Text)
    newOption2.appendChild(option2Text)
    newOption3.appendChild(option3Text)
    newSelect.appendChild(newOption1)
    newSelect.appendChild(newOption2)
    newSelect.appendChild(newOption3)

    // newCol.appendChild(checkbox)
    newCol.appendChild(newSelect)
    


    document.getElementById("shoes").appendChild(newCol)
    // checkbox.checked = true; 

};

var expiryMsg;
var today;
var elEnds;

function offerExpires(today){
  var weekFromToday, day, date, onth, year, dayNames, monthNames;
  weekFromToday = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);
  dayNames = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday"];
  monthNames = [" January ", " february ", " March ", " April ", "May ", " June ", " July ", " August ", " September ", " October ", " November ", " December "];
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();
  expiryMsg = "offer expires next ";
  expiryMsg +=  "</br>" + day + date + month + year;
  return expiryMsg;
}
today = new Date();
elEnds = document.getElementById("offerEnds");
elEnds.innerHTML = offerExpires(today);
