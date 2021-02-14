const { parse } = require('himalaya');

module.exports.parseHTML = (html) => { // placeholder
	return new Promise((resolve, reject) => {
		resolve(parse(html));
	});
}
