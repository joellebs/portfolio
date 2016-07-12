//greeting
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
	greeting = 'Good evening!';
} else if (hourNow > 12){
	greeting = 'Good afternoon!';
} else if (hourNow > 0){
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}

document.getElementById("greeting").textContent = greeting

//signs
var zodiac = [
	{
	name: "aries",
	image: "images/aries.png",
	description: "Fire signs and those born under this element are regarded in astrology as adventurous, active and outgoing." 
	},
	{
	name: "taurus",
	image: "images/taurus.png",
	description: "Determined & Sensual. Taureans can be mistaken as withdrawn or boring, when actually they are just cool & discreet. A typical Taurus enjoys life's comforts." 
	},
	{
	name: "gemini",
	image: "images/gemini.png",
	description: "Intense & Explorative. As excellent communicators, Gemini also search out new experiences and lead unique lives." 
	},
	{
	name: "cancer",
	image: "images/cancer.png",
	description: "Compassionate & Contradictory. A true romantic, Cancerians have a changeable nature and can appear eccentric at one moment, and sensitive the next." 
	},
	{
	name: "leo",
	image: "images/leo.png",
	description: "Radiant & Leader. Leos are the positive thinkers of the zodiac, as such people and opportunities are drawn to them; they are definitely leaders rather than followers." 
	},
	{
	name: "virgo",
	image: "images/virgo.png",
	description: "Caring & Confident. This Earth sign is able to maintain faith, even when things go bad. Often creative, Virgo is generous and willing to support and care for those around them." 
	},
	{
	name: "libra",
	image: "images/libra.png",
	description: "Charming & Harmonious. This happy go lucky sign seek peace, and often are successful at business." 
	},
	{
	name: "scorpio",
	image: "images/scorpio.png",
	description: "Resilient & Powerful. Scorpio are often passionate about love & power. There are 3 unique types of Scorpio, but they all are often said to be old souls and sensitive." 
	},
	{
	name: "sagittarius",
	image: "images/sagittarius.png",
	description: "Optimistic & Honest. Always aiming high, Sagittarians seek adventure & independence, whilst still being one of the zodiac's most large hearted signs." 
	},
	{
	name: "capricorn",
	image: "images/capricorn.png",
	description: "Resilient & Patient. Whether the ambitious goat, or the goat that is content in their own domain, Capricorns are goal achievers, whilst being reliable and sympathetic." 
	},
	{
	name: "aquarius",
	image: "images/aquarius.png",
	description: "Trendsetters & Humanitarian. Although sometimes seen as eccentric, Aquarians are quick thinking, outgoing & loyal." 
	},
	{
	name: "pisces",
	image: "images/pisces.png",
	description: "Sensitive & Mysterious. Pisces are often pulled in two directions, which sometimes causes confusion in their life and emotional periods. However, they are also very talented and resilient. " 
	}
]

function clickMe() {
	var sign = document.getElementById("sign").value.toLowerCase()
	var tryAgain = document.getElementById("wrong")

	for (i = 0; i < zodiac.length; i++) {
	    if (sign == zodiac[i].name) {
	    document.getElementById("wrong").innerHTML = ""
	      document.getElementById("name").innerHTML = zodiac[i].name
	      document.getElementById("image").setAttribute("src", zodiac[i].image)
	      document.getElementById("description").innerHTML = "daily " + zodiac[i].description
	      document.getElementById("image").className = "img";
	      document.getElementById("description").className = "des";	      
	      return
	    } else {
	      
			}

	}
	document.getElementById("wrong").innerHTML = "Try again!"
	      document.getElementById("description").innerHTML = ""
	      document.getElementById("image").src = ""
}
