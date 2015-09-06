var app ={};

app.testimonials = testimonialsArray;

app.displayTestimonials = function displayTestimonials(testimonialsArray){

	var arr = testimonialsArray.slice(), // creating a new reference rather than editing the original array
		paragraphs,
		linkAndName,
		template,
		counter = 0;

	shuffle(arr);

	for(var obj in arr){
		
		linkAndName = createLinkName(arr[obj].link, arr[obj].name); // returns link and name in string format
		
		paragraphs = createParagraph(arr[obj].testimony); // returns testimony in string format surrounded by <p> tags

		template = '<div class="yelp">' + paragraphs + linkAndName + '</div>';
		
		if(counter < 3){
			$('#testimonials').prepend(template);
			arr.splice(arr.indexOf(arr[obj]), 1);
			
			counter++;
		} else {
			return;
		}
		
	}

	
	// helper functions
	function createLinkName(link, name){
		var linkName = '<p><strong><a href="' + link + '" target="_blank">' + name +  '<i class="fa fa-angle-right"></i></a></strong></p>';
		
		return linkName;
	}

	function createParagraph(testimony){
		var str = '';
		for(var i = 0; i < testimony.length; i++){
			str += '<p>' + testimony[i] + '</p>';
		}

		return str;
	}
	
	return arr; // when finished displaying first three testimonials, it will return a new arr with only the testimonials that are ready to display on See more Testimonials button.

};

app.generateImages = function(){

	// This method is generating 15 random images from the images/min folder and displaying them.
	// the loop is picking numbers at random and checking the number to make sure no numbers are being duplicated.
	
	var amountOfImagesInFolder = 40; // amount of images in the folder
	var amountOfImagesToShow = 15; // how many images to show
	var folderPath = '/images/min/'; // folder all images are in
	var str = ''; // going to be the string that will get dumped into the page
	
	var fileNameConvention = 'image-';
	var usedNumbers = [];
	
	for(var i = 0; i < amountOfImagesToShow; i++){
		var randomImageNumber = Math.floor(Math.random() * amountOfImagesInFolder);
		
		var image = folderPath + fileNameConvention + randomImageNumber + '.jpg';
		var tag = '<li><img src="' + image + '" /></li>';
			
		if($.inArray(randomImageNumber, usedNumbers) === -1){ // if the number IS in the array
			usedNumbers.push(randomImageNumber); // add number to array
			str += tag; // add <img> tag to string
		} else {
			// No new image is being added to the page so we want to remove 1 from the itteration.
			i--;
		}
	}
	
	return str;
}; 

$('#banner').append(app.generateImages()).bxSlider({
	mode: 'fade',
	speed: 350,
	pager: false,
	auto: true,
	autoStart: true,
	autoHover: true
}); 

var lastTestimonials = app.displayTestimonials(app.testimonials);