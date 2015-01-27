$(function() {
    console.log( "ready!" );
    $('.showMenu').on('click',function(){
    	 $( ".menu" ).slideToggle( "fast", function() {
    // Animation complete.
  });
    });


   $( "button" ).click(function() {
   $( this ).css( "background-color","#fff" );
   
});

   $( "#show" ).click(function() {
   var list = [songoTrail,reddingIshkoodaEastTrail,smytheTrail,ishkoodaTrail,mineSpur14Trail,mineSpur13Trail,ishkoodaSpur12Trail,tciConnectorTrail,bmrrLoopNorthTrail,eurekaMinesTrail,ikeMastonTrail,southBranchRRBedTrail,reddingIshkoodaWestTrail,reddingIshkoodaProposedTrail];	
   var i;
   for(i=0;i < list.length;++i)
   {
   	$(list[i].cssClass).css("background-color",list[i].strokeColor);
   };
});


  $( "#hide" ).click(function() {
   var list = [songoTrail,reddingIshkoodaEastTrail,smytheTrail,ishkoodaTrail,mineSpur14Trail,mineSpur13Trail,ishkoodaSpur12Trail,tciConnectorTrail,bmrrLoopNorthTrail,eurekaMinesTrail,ikeMastonTrail,southBranchRRBedTrail,reddingIshkoodaWestTrail,reddingIshkoodaProposedTrail];	
   var i;
   for(i=0;i < list.length;++i)
   {
   	$(list[i].cssClass).css("background-color","#fff");
   };
});



});