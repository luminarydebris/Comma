// Comma Separated List - TAB 1
$(function(){
	$('#comma_to_semicolon').on('paste', function(e){
		var e = $(this);
		setTimeout(function(){
			e.val( $.trim(e.val()).replace(/,/g, '; ') );
		}, 0);
		
	});
	
});

// Hide Alerts - TAB 1
$("#success-alert").hide();
$("#danger-alert").hide();

// Show Alerts - TAB 1
$('#copyButton1').click(function() {
 
	if ( $('#comma_to_semicolon').val() == '' )
	{
		$("#danger-alert").hide();
 		$("#danger-alert").alert();
 		$("#danger-alert").fadeTo(2000, 500).slideUp(500, function(){
    	$("#danger-alert").slideUp(500);
 		});   
	 } 
	 
	 else
	 {
	 	$("#success-alert").hide();
	 	$("#success-alert").alert();
	 	$("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
	    $("#success-alert").slideUp(500);
	 	});   	
	 }
});

// Stacked List - TAB 2
$(function(){
	$('#stacked_to_semicolon').on('paste', function(e){
		var e = $(this);
		setTimeout(function(){
			e.val( $.trim(e.val()).replace(/\s+/g, '; ') );
		}, 0);
	});
});


// Hide Alerts - TAB 2
$("#success-alert-two").hide();
$("#danger-alert-two").hide();

// Show Alerts - TAB 2
$('#copyButton2').click(function() {
 
	if ( $('#stacked_to_semicolon').val() == '' )
	{
		$("#danger-alert-two").hide();
 		$("#danger-alert-two").alert();
 		$("#danger-alert-two").fadeTo(2000, 500).slideUp(500, function(){
    	$("#danger-alert-two").slideUp(500);
 		});   
	 } 
	 
	 else
	 {
	 	$("#success-alert-two").hide();
	 	$("#success-alert-two").alert();
	 	$("#success-alert-two").fadeTo(2000, 500).slideUp(500, function(){
	    $("#success-alert-two").slideUp(500);
	 	});   	
	 }
});

// Comma Separated List - TAB 3
$(function(){
	$('#comma_to_stacked').on('paste', function(e){
		var e = $(this);
		setTimeout(function(){
			e.val($.trim(e.val()).replace(/,/g, '\n'));
			e.val($.trim(e.val()).replace(/;/g, '\n'));
			e.val($.trim(e.val()).replace(/ /g, ''));
		}, 0);
	});
});

// Hide Alerts - TAB 3
$("#success-alert-three").hide();
$("#danger-alert-three").hide();

// Show Alerts - TAB 3
$('#copyButton3').click(function() {
 
	if ( $('#comma_to_stacked').val() == '' )
	{
		$("#danger-alert-three").hide();
 		$("#danger-alert-three").alert();
 		$("#danger-alert-three").fadeTo(2000, 500).slideUp(500, function(){
    	$("#danger-alert-three").slideUp(500);
 		});   
	 } 
	 
	 else
	 {
	 	$("#success-alert-three").hide();
	 	$("#success-alert-three").alert();
	 	$("#success-alert-three").fadeTo(2000, 500).slideUp(500, function(){
	    $("#success-alert-three").slideUp(500);
	 	});   	
	 }
});

