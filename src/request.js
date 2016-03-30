/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
const request = require("client-request");
const api ='https://api.typeform.io/latest/';

let token = '';

export function set(sessionToken) {

	token = sessionToken;
}

export default function(options) {

	if (!token) throw new Error('Token must be set, use this module\'s set method');

	let opts = Object.assign({}, options, {
		json: true,
		headers: { 'X-API-TOKEN': token }
	});

	opts.uri = setUri(options.uri);

	return new Promise(function (resolve, reject) {
		request(opts, function callback(err, response, body) {

			let isSuccessful = response.statusCode > 199 && response.statusCode < 300;

			if (!isSuccessful) {
				reject({
					code: response.statusCode,
					message: response.statusMessage
				});

				return;
			}

			resolve(body);
		})
	});

	function setUri(endPoint) {
		return `${api}${endPoint}`;
	}
}