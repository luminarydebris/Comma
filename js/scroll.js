jQuery(document).ready(function(){
jQuery(window).scroll(function(){
jQuery(this).scrollTop()>220?jQuery("#scroll-top").fadeIn(750):jQuery("#scroll-top").fadeOut(750)}),
jQuery("#scroll-top").click(function(a){return a.preventDefault(),
jQuery("html, body").animate({scrollTop:0},750),!1})});