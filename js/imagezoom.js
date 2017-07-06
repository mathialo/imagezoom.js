var imgzm = {
	backgroundDiv: {},
	imageDiv: {},

	zoomImage: function(event) {
		var image = event.target;
		imgzm.backgroundDiv.style.visibility = "visible";
		imgzm.imageDiv.appendChild(image.cloneNode());
	},


	exitZoom: function() {
		imgzm.backgroundDiv.innerHTML = "";
		imgzm.backgroundDiv.style.visibility = "hidden";
	},


	applyToImage: function(htmlDOM) {
		htmlDOM.addEventListener("click", imgzm.zoomImage);
	},


	applyToAllImgTags: function() {
		var images = document.getElementsByTagName("img");

		for (var i = 0; i < images.length; i++) {
			imgzm.applyToImage(images[i]);
		}
	},


	setup: function() {
		imgzm.backgroundDiv = document.createElement("div");
		imgzm.backgroundDiv.style = "visibility: hidden; position: fixed; \
			top: 0; bottom: 0; left: 0; right: 0; margin: auto; z-index: 1500; \
			opacity: 0.80; background-color: #000000; padding: 30px; padding-top: 10px;";
		imgzm.backgroundDiv.id = "imgzm.background";
		imgzm.backgroundDiv.addEventListener("click", imgzm.exitZoom);

		document.body.appendChild(imgzm.backgroundDiv);

		imgzm.imageDiv = document.createElement("div");
		imgzm.imageDiv.style = "visibility: hidden; position: fixed; \
			margin: auto; z-index: 1501;";
		imgzm.imageDiv.addEventListener("click", imgzm.exitZoom);

		document.body.appendChild(imgzm.imageDiv);
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	imgzm.setup();
});

