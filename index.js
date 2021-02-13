const { getDDG } = require("./lib/getddg.js")
const parser = require("./lib/htmlparser.js")

getDDG("test").then((r) => console.log(r));
