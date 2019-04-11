var app = {};

app.testimonials = testimonialsArray;

app.buildTestimonial = function displayTestimonial(testimonialObj) {
	var testimonial = testimonialObj,
		paragraphs,
		linkAndName,
		template;

	linkAndName = createLinkName(testimonial.link, testimonial.name); // returns link and name in string format

	paragraphs = createParagraph(testimonial.testimony); // returns testimony in string format surrounded by <p> tags

	template = '<div class="yelp">' + paragraphs + linkAndName + "</div>";

	// helper functions
	function createLinkName(link, name) {
		var linkName =
			'<p><strong><a href="' +
			link +
			'" target="_blank">' +
			name +
			'<i class="fa fa-angle-right"></i></a></strong></p>';

		return linkName;
	}

	function createParagraph(testimony) {
		var str = "";
		for (var i = 0; i < testimony.length; i++) {
			str += "<p>" + testimony[i] + "</p>";
		}

		return str;
	}

	return template;
};

app.displayTestimonials = function displayTestimonials(
	testimonialsArray,
	amount
) {
	var arr = testimonialsArray.slice(), // creating a new reference rather than editing the original array
		amountToDisplay = amount ? arr.length - amount : arr.length,
		count = 0;

	shuffle(arr);

	// Have a reversed loop because when I remove an item from the arr it gets re-indexed
	for (var i = arr.length - 1; i >= amountToDisplay; i--) {
		var template = app.buildTestimonial(arr[i]);
		var objIndex = arr.indexOf(arr[i]);

		//$('#testimonials').before('#viewRemainingTestimonials').append(template);

		$(template).insertBefore("#viewRemainingTestimonials");

		arr.splice(objIndex, 1);
		count++;
	}

	if (arr.length > 0) {
		return arr; // when finished displaying first three testimonials, it will return a new arr with only the testimonials that are ready to display on See more Testimonials button.
	}
};

app.generateImages = function() {
	// This method is generating 15 random images from the images/min folder and displaying them.
	// the loop is picking numbers at random and checking the number to make sure no numbers are being duplicated.

	var amountOfImagesInFolder = 40; // amount of images in the folder
	var amountOfImagesToShow = 15; // how many images to show
	var folderPath = "/images/min/"; // folder all images are in
	var str = ""; // going to be the string that will get dumped into the page

	var fileNameConvention = "image-";
	var usedNumbers = [];

	for (var i = 1; i < amountOfImagesToShow; i++) {
		var randomImageNumber = Math.floor(
			Math.random() * amountOfImagesInFolder
		);

		var image =
			folderPath + fileNameConvention + randomImageNumber + ".jpg";
		var tag = '<li><img src="' + image + '" /></li>';

		if ($.inArray(randomImageNumber, usedNumbers) === -1) {
			// if the number is NOT in the array
			usedNumbers.push(randomImageNumber); // add number to array
			str += tag; // add <img> tag to string
		} else {
			// No new image is being added to the page so we want to remove 1 from the itteration.
			i--;
		}
	}

	return str;
};

$("#banner")
	.append(app.generateImages())
	.bxSlider({
		mode: "fade",
		speed: 350,
		pager: false,
		auto: true,
		autoStart: true,
		autoHover: true,
		adaptiveHeight: true,
	});

var lastTestimonials = app.displayTestimonials(app.testimonials, 3);

// set current copyright year
document.getElementById("currentYear").innerText = new Date().getFullYear();
