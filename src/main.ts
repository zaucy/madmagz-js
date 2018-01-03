import {MadMagzBaseAPI} from "./base";
import {MadMagzMagazineAPI} from "./magazine";

export class MadMagzAPI extends MadMagzBaseAPI {

	magazine(magazineId: number) {
		return new MadMagzMagazineAPI(this, magazineId);
	}

}
