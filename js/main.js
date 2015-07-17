var app ={};

app.testimonials = testimonialsArray;

app.displayTestimonials = function displayTestimonials(testimonialsArray){

	var paragraphs,
		linkAndName,
		template;

	shuffle(testimonialsArray);

	for(var obj in testimonialsArray){

		// returns link and name in string format
		linkAndName = createLinkName(testimonialsArray[obj].link, testimonialsArray[obj].name);
		// returns testimony in string format
		paragraphs = createParagraph(testimonialsArray[obj].testimony);

		template = '<div class="yelp">' + paragraphs + linkAndName + '</div>';
		
		$('#testimonials').append(template);
	}


	function createLinkName(link, name){
		var linkName = '<p><strong><a href="' + link + '" target="_blank">' + name +  '</a></strong></p>';
		
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