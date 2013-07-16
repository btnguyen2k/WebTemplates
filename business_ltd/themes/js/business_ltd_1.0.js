/* 
Need any help for business ltd template? : Contact
=============================
-----------------------------
	Adhikari Surya
	Frontend Web Developer
	Email: adh.surya@gmail.com
-----------------------------
=============================
 */
$(document).ready(function() {
/*Page transition---------------- */
	$("body").animate({
		top:'0'
	  },400, function() {
		// Animation complete.
/* Pagetitle animations ----------------------*/
		$('#pageTitle').animate({
		right:'0'
		},400, function() {
		// Animation complete.
		})
/* Body section animations ----------------------*/	
	  	$('#bodySection').animate({
		left:'100'
		},400, function() {
		$('#bodySection').animate({
		left:'0'
	  },500, function() {
	// Animation complete.		
	  });
	  });
 /* Menu Bar animations ----------------------*/
		$('#headerSection .pull-right').animate({
		top:'-40'
	  },400, function() {
	  // Animation complete.
	  $('#headerSection .pull-right').animate({
		top:'0'
	  },500, function() {
	  // Animation complete.
	  });
	  });
		
	/* Middle section animations ----------------------*/
		$('#middleSection').animate({
		top:'-180'
		},400, function() {
		// Animation complete.
		$('#middleSection').animate({
		top:'0'
		},500, function() {
		// Animation complete.
		});
		});
	});
  
/* Carousel animation */
 	$(".carousel-caption").animate({
		top:'40'
	  }, 1800, function() {
		// Animation complete.
	  });
	  
/* Home page main carousel---------------- */
	$('#myCarousel').carousel({
	  interval: 5000
	})
/* Blog carousel---------------- */
	$('.blogCarousel').carousel({
	  interval: 3000
	})
 // tooltip demo
    $('.tooltip-demo.well').tooltip({
      selector: "a[rel=tooltip]"
    })
/* pop over ---------------- */
    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

// popover demo
    $(".popOver")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

$(".toolTipgroup a").tooltip()

/* Go to top */
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

});
