# Unofficial MadMagz Javascript API

This is an unofficial JavaScript API for retrieving information about madmagz magazines.

## Getting Started

Install madmagz

```
npm i madmagz
```

### Example usage
```JavaScript
const {MadMagzAPI} = require("madmagz");

let madmagz = new MadMagzAPI();
let demoMagazine = madmagz.magazine(354832);

demoMagazine.thumbnails().then(thumbnails => {
	// 'thumbnails' should look something like this:
	thumbnails = {
		cssPath: "/home/madmagz/public_html/madmagz.com/sites/public/www/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110.css",
		cssSelfhostedUrl: "viewer/images/thumbnails/3408ddc3f455de0a50e2e3a2bb551e68_110.css",
		cssUrl: "//madmagz.com/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110.css",
		imagePath: "/home/madmagz/public_html/madmagz.com/sites/public/www/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110.jpg",
		imageRetinaPath: "/home/madmagz/public_html/madmagz.com/sites/public/www/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110@2x.jpg",
		imageRetinaSelfhostedUrl: "viewer/images/thumbnails/3408ddc3f455de0a50e2e3a2bb551e68_110@2x.jpg",
		imageRetinaUrl: "//madmagz.com/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110@2x.jpg",
		imageSelfhostedUrl: "viewer/images/thumbnails/3408ddc3f455de0a50e2e3a2bb551e68_110.jpg",
		imageUrl: "//madmagz.com/data/magazines/2017/10/27/1154085/thumbs/sprites/3408ddc3f455de0a50e2e3a2bb551e68_110.jpg"
	};
});
```
