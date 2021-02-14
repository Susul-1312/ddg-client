const { getDDG } = require("./lib/getddg.js")
const { parseHTML } = require("./lib/htmlparser.js")

getDDG("nodejs").then((r) => { // this is just for testing for now
	console.log(r);
	parseHTML(r.body).then((h) => {
		console.log(h);
	})
})
