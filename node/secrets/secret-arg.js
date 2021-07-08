var nopt = require("nopt")

var longOpts = {
    "sessionSecret" : String,
}

var shortOpts = {
    "s" : ["--sessionSecret"],
}

vvar parsed = nopt(longOpts, shortOpts, process.argv, 2)

console.log("session secret is : ", parsed.sessionSecret)