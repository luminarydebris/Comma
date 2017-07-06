/* Comma to Semi-Colon */		
$(document).ready(function(){
	$(".click").click(function(){
        $(".showOff").toggle(700);
		$(".showOffs").toggle(700);
    });
});


/************************************/

/* Stacked to Semi-Colon */		
$(document).ready(function(){
	$(".clicks").click(function(){
        $(".showOfftwo").toggle(700);
		$(".showOfftwos").toggle(700);
    });
});

/************************************/

/* Comma to Stacked List */		
$(document).ready(function(){
	$(".clickss").click(function(){
        $(".showOffthree").toggle(700);
		$(".showOffthrees").toggle(700);
    });
});




/* DISPLAY CHARACHTER COUNT */
function countChar(val) {
	var len = val.value.length;
	val.value = val.value.substring();
	$('#charNum').text(len);
	};

/************************************/


	/* SHOW HIDE CHARACTER REPLACE OPTIONS */		
$(document).ready(function(){
	$(".todoList").click(function(){
	      $(".todoOff").toggle(700);
	});
});