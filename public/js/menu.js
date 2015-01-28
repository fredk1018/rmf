//#869699 this is ethernet order #
$(function() {
    console.log( "ready!" );
    var menuIsOpen = false;


    $('.showMenu').on('click',function(){
    	if(menuIsOpen === true)
    	{
    		$(this).rotate({animateTo:0});
    		menuIsOpen = false;
    	}else{
    		$(this).rotate({animateTo:180});
    		menuIsOpen = true;
    	}


    	
    var list = [songoTrail,reddingIshkoodaEastTrail,smytheTrail,ishkoodaTrail,mineSpur14Trail,mineSpur13Trail,ishkoodaSpur12Trail,tciConnectorTrail,bmrrLoopNorthTrail,eurekaMinesTrail,ikeMastonTrail,southBranchRRBedTrail,reddingIshkoodaWestTrail,reddingIshkoodaProposedTrail];	
		var i;
   		for(i=0;i < list.length;++i){
   			if(list[i].show === true)
   			{
   			$(list[i].cssClass).css("background-color",list[i].strokeColor);
   			$(list[i].cssClass).css("color","white");
   			}else{
   			$(list[i].cssClass).css("background-color","#fff");
   			$(list[i].cssClass).css("color","black");
   			};
   		}

    	 $( ".menu" ).slideToggle( "fast", function() {
    // Animation complete.
  		 });
    });


    $('button').click(function(){

    });

   $( "#show" ).click(function() {
   var list = [songoTrail,reddingIshkoodaEastTrail,smytheTrail,ishkoodaTrail,mineSpur14Trail,mineSpur13Trail,ishkoodaSpur12Trail,tciConnectorTrail,bmrrLoopNorthTrail,eurekaMinesTrail,ikeMastonTrail,southBranchRRBedTrail,reddingIshkoodaWestTrail,reddingIshkoodaProposedTrail];	
   var i;
   for(i=0;i < list.length;++i)
   {
   	$(list[i].cssClass).css("background-color",list[i].strokeColor);
   	$(list[i].cssClass).css("color","white");
   	list[i].show = true;
   };
});


  $( "#hide" ).click(function() {
   var list = [songoTrail,reddingIshkoodaEastTrail,smytheTrail,ishkoodaTrail,mineSpur14Trail,mineSpur13Trail,ishkoodaSpur12Trail,tciConnectorTrail,bmrrLoopNorthTrail,eurekaMinesTrail,ikeMastonTrail,southBranchRRBedTrail,reddingIshkoodaWestTrail,reddingIshkoodaProposedTrail];	
   var i;
   for(i=0;i < list.length;++i)
   {
   	$(list[i].cssClass).css("background-color","#fff");
   	$(list[i].cssClass).css("color","black");
   	list[i].show = false;
   };
});







});