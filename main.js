

$(function(){
	    		$(window).scroll(function (){
	        $('.fadeIn').each(function(){
	            var targetElement = $(this).offset().top;
	            var scroll = $(window).scrollTop();
	            var windowHeight = $(window).height();
	            if (scroll > targetElement - windowHeight + 200){
	                $(this).css('opacity','1');
	                $(this).css('transform','translate3d(0, 0, 0)');
	            }else{
				  $(this).css('opacity','0');
				  $(this).css('transform','translate3d(0, 20px, 0)');
				}
	        });
	    });
	});



console.log("im here")

