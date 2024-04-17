let modInfo = {
	name: "The Banana Tree",
	id: "bananas",
	author: "me",
	pointsName: "cash",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "fdas",
}
let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- sdfgh.<br>
		- sdfgh.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add ne
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = new Decimal(player.ml.points)
    gain = Decimal.pentate(gain,player.rl.points)
    gain = Decimal.pentate(gain,player.url.points)
	gain = Decimal.mul(gain,player.ml.points)
    gain = Decimal.mul(gain,player.rl.points)
    gain = Decimal.mul(gain,player.url.points)
	return gain
}
// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {

}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}