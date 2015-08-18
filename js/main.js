var app ={};

app.testimonials = testimonialsArray;

app.displayTestimonials = function displayTestimonials(testimonialsArray){

	var paragraphs,
		linkAndName,
		template,
		counter = 0;

	shuffle(testimonialsArray);


	
	for(var obj in testimonialsArray){

		// returns link and name in string format
		linkAndName = createLinkName(testimonialsArray[obj].link, testimonialsArray[obj].name);
		// returns testimony in string format
		paragraphs = createParagraph(testimonialsArray[obj].testimony);

		template = '<div class="yelp">' + paragraphs + linkAndName + '</div>';
		
		if(counter < 3){
			$('#testimonials').prepend(template);
			counter++;
		} else {
			return;
		}
	}


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

};

app.displayTestimonials(app.testimonials);