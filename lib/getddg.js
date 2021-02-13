const https = require("https");

module.exports.getDDG = (search) => {
	return new Promise((resolve, reject) => {
		https.get("https://lite.duckduckgo.com/lite?q="+search, (response) => {

			let data = [];

			response.on("data", (d) => {
				data.push(d.toString());
			})

			response.resume();
			response.on("end", () => {
				console.log("resonse ended");

				if (!response.complete) reject("Connection was terminated prematurely");

				resolve({
					code: response.statusCode,
					query: search,
					body: data.join()
				});

			});
		}).on("error", (e) => reject(e));
	});
}
