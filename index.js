var fs = require("fs")

var dir = fs.readdirSync("./icons")

var icons = [
    "DrinkMargarita16Filled",
]
var found = []
for (var i of dir) {
    var lins = fs.readFileSync(`./icons/${i}`, 'ascii').split("\n")
    for (var icon of icons) {
        var f = lins.find(f => f.startsWith(`export const ${icon} =`))
        if (f)
            found.push(f)
    }
}

fs.writeFileSync("./found.js", found.join('\n'))