import * as assert from "assert";
import {MadMagzAPI} from "./main";

describe("Magazine thumbnails", async function() {

	it("successfully retreive demo magazine (354832)", async function() {
		this.timeout(10000);
		let madmagz = new MadMagzAPI();
		let thumbnails = await madmagz.magazine(354832).thumbnails();

		assert(Object.keys(thumbnails).length > 0, "Response has 0 keys");
	});
});
