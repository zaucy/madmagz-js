import * as https from "https";

export interface MadMagzAPIResponse {
	[key:string]: any
}

export interface MadMagzAPIRequestOptions {
	[key:string]: any
}

export class MadMagzBaseAPI {

	constructor
		( protected _parent:       MadMagzBaseAPI | null  = null
		, private _apiPathPrefix:  string                 = ""
		)
	{
	}

	GET
		( pathname:  string
		, options:   MadMagzAPIRequestOptions = {}
		): Promise<MadMagzAPIResponse>
	{
		let requestOptions = {
			protocol: "https:",
			hostname: "madmagz.com",
			method: "GET",
			path: "/api/" + this._apiPathPrefix + pathname
		};

		return new Promise<MadMagzAPIResponse>((resolve, reject) => {

			let request = https.request(requestOptions, response => {
				let data = "";

				response.on("data", (chunk: Buffer | string) => {
					data += chunk.toString();
				});

				response.on("error", (err: any) => {
					reject(err);
				});

				response.on("end", () => {
					try {
						let parsedData = JSON.parse(data.toString());
						resolve(parsedData);
					} catch(err) {
						reject(err);
					}
				});
			})

			request.on("error", (err: any) => {
				reject(err);
			});

			request.end();
		});
	}
}
