
$(document).ready(function(){
	$('#contact-form').on('click', 'button', function toggleClick(e){
		e.preventDefault();
		$(this).toggleClass('sent');
	});
});