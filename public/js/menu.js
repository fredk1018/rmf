$(function() {
    console.log( "ready!" );
    $('.showMenu').on('click',function(){
    	 $( ".menu" ).slideToggle( "slow", function() {
    // Animation complete.
  });
    });


   $( "button" ).click(function() {
   $( this ).toggleClass( "active" );
});

});