$(document).ready(function(){
//discount click handler
	$(".tour").on('click','button',function(){
		var tour = $(this).closest('.tour');
		var discount = tour.data('discount');
		var price = $('<span>From $'+discount+'</span>')
		tour.append(price);
		$(this).remove();
	});
//filter handlers
	//click handler for on-sale items
	$('#filters').on('click', '.on-sale', function(){
		$('.tour').removeClass('highlight');
		$('.tour').filter(".on-sale").addClass('highlight');

	});
	//click handler for featured items
	$('#filters').on('click', '.featured', function(){
		$('.tour').removeClass('highlight');
		$('.tour').filter(".featured").addClass('highlight');
		
	});





});
