var app ={};

app.testimonials = [{
	name: 'Vicky W.',
	link: 'http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=N2fXc-lUPlHsiEqY0dU5nw&page_src=shared_via_messages_or_emails',
	// testimony is an array of strings. Each string is a paragraph
	testimony: ["A little over due...we live in the Bay Area and needed the condo our sons live in painted in early December. Tony provided a very fair estimate. We went down the day before the job started, met Tony the next morning and stayed in town through the completion.", "Excellent work! Tony and his crew were neat, cleaned up after themselves and thorough with every aspect. We highly recommend Tony!"]
}, {
	name: 'Meegan C.',
	link: 'http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=wf0Zd5zj8PD7-l9pxZc7_g&page_src=shared_via_messages_or_emails',
	testimony: ["Tony and his crew are the best, simply amazing. Not only do they leave you with a beautiful home with a quality paint job, they are a pleasure to have around!  If you need to hire a painter, do yourself a favor and hire Tony Testa!"]
},{
	name: 'Linda O.',
	link: 'http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=r07EQfSRQhI_ZoWyv8GL6A&page_src=shared_via_messages_or_emails',
	testimony: ["Tony and his crew showed up on time and did a great job.  No mess was left behind and no overpainting or scraping needed when they left.  They are very professional.  I would highly recommend them to anyone who needs a good painter with reasonable rates.  It doesn't get any better then Testa Painting.  Call Tony"]
}];

app.displayTestimonials = function displayTestimonials(testimonialsArray){

	var paragraphs,
		linkAndName,
		template;

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