
addLayer("ml", {
    name: "ml", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(2),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Multi", // Name of prestige currency
    baseResource: "Cash", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(player.rl.points)
        mult = Decimal.add(mult,1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuse
        return new Decimal.pow(1)
    }, 
    upgrades: {
        1: {
            title: "10x points",
            description: "10x points",
            cost: new Decimal(1000),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            branches: [],
            tooltip: "10x points",
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("rl", {
    name: "rl", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#0000ff",
    requires: new Decimal(15), // Can be a function that takes requirement increases into account
    resource: "Rebirth", // Name of prestige currency
    baseResource: "Multi", // Name of resource prestige is based on
    baseAmount() {return player.ml.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuse
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
