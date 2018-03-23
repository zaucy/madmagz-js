import {MadMagzBaseAPI} from "./base";

export interface MadMagzMagazineThumbnails {
	className: string;
	cssPath: string;
	cssSelfhostedUrl: string;
	cssUrl: string;
	imagePath: string;
	imageRetinaPath: string;
	imageRetinaSelfhostedUrl: string;
	imageRetinaUrl: string;
	imageSelfhostedUrl: string;
	imageUrl: string;
}

export class MadMagzMagazineAPI extends MadMagzBaseAPI {

	constructor
		( protected _parent:  MadMagzBaseAPI | null
		, _magazineId:        number
		)
	{
		super(_parent, `magazine/${_magazineId}/`);
	}

	thumbnails(): Promise<MadMagzMagazineThumbnails> {
		return this.GET("thumbnails-sprite", {})
			.then((response) => {
				if(response.code != 200) {
					return Promise.reject(new Error(
						`Code ${response.code}: ` + JSON.stringify(response, null, '  '),
					));
				} else {
					// return Promise.reject(true);
					let {content} = response;
					return Promise.resolve({
						className: content.className,
						cssPath: content.cssPath,
						cssSelfhostedUrl: content.cssSelfhostedUrl,
						cssUrl: content.cssUrl,
						imagePath: content.imagePath,
						imageRetinaPath: content.imageRetinaPath,
						imageRetinaSelfhostedUrl: content.imageRetinaSelfhostedUrl,
						imageRetinaUrl: content.imageRetinaUrl,
						imageSelfhostedUrl: content.imageSelfhostedUrl,
						imageUrl: content.imageUrl,
					});
				}
			});
	}
}
