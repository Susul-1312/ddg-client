const { parseString } = require('xml2js');

module.exports.parseHTML = (html) => { // placeholder
	return new Promise((resolve, reject) => {
		parseString(html, (err, res) => {
			if (err) reject(err);
			resolve(res);
		});
	});
}
