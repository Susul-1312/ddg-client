const https = require("https");

module.exports.getDDG = (search) => {
	return new Promise((resolve, reject) => { // create promise because promises are easier to work with
		https.get("https://lite.duckduckgo.com/lite?q="+search, (response) => {

			let data = []; // declare and initialize array that later collects the data

			response.on("data", (d) => { // push data to data-array when it arrives
				data.push(d.toString());
			})

			response.resume(); // let the response give out its data

			response.on("end", () => {
				if (!response.complete) reject("Connection was terminated prematurely"); // in case something bad happens and the connection closes

				resolve({ // resolving the promise with the nicely formatted data
					code: response.statusCode,
					query: search,
					body: data.join()
				});

			});
		}).on("error", (e) => reject(e)); // reject if there is an error and pass the error
	});
}
