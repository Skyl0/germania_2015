/* 
 * ----------------
 * Skript: Germania 2015
 * Für meine liebe Germania 2015
 * Von : Marc Ernst
 * Firma : SkyIT Webdesign Darmstadt
 * Erstellt: 26.7.2015
 * ----------------
 * Version 0.0.1
 * ----------------
 */

jQuery(document).ready(function($)  {
	
	
	// Burger Menu
	
	var burger = $('.burger');
	var menu = $('ul.mainmenu');
	
	burger.click( function() {
		menu.slideToggle();
	});

	/*
	 * Footer Fix
	 */
	     
     $('.bottom_middle a').each(function () {     	
     	$(this).text(" " + $(this).text() + " "); 
     });
	
	/*
	 * fadeOut Slider Text while scrolling
	 */
	var slidertext = $('.sliderimg .container');
	var start_at = 140;
	var fade_px = 50;
	var opacity = 1.0;
	
	$(document).scroll( function() {
		var yscroll = $(document).scrollTop();
		if (yscroll <= start_at) {
			opacity = 1.0;
			slidertext.css('opacity',opacity);
			//console.log("Erste If erreicht!");
		} else {
			opacity = (fade_px - (yscroll - start_at)) / fade_px ;
			//console.log("opacity" + opacity);
			if ( opacity < 0 ) {opacity = 0.0;}
			slidertext.css('opacity',opacity);
		}
	});
	
	
	/*
	 * Search Focus on Blur
	  
	
	var Input = $('input.searchword');
    var default_value = Input.val();

    Input.focus(function() {
        if(Input.val() == default_value) Input.val("");
    }).blur(function(){
        if(Input.val().length == 0) Input.val(default_value);
    });
     */
     /*
      * Fix Shortcode Height
      */
      
     var sc1 = $('.shortcodes_left').height();
     var sc2 = $('.shortcodes_middle').height();
     var sc3 = $('.shortcodes_right').height();
     var max = sc1;
     
     console.log('Max: ' + max );
     resizeShortcodes();
     
 	function resizeShortcodes () {

 		     //if ($().width() > 959 ){
			     if (sc2 > max) {			     	
					max = sc2;	
					 console.log('Max: ' + max );	     	
			     }
			     if (sc3 > max) {
			     	max = sc3;
			     	 console.log('Max: ' + max );
			     }
		    
		     	$('.shortcodes_left').height(max);
		     	$('.shortcodes_middle').height(max);
		     	$('.shortcodes_right').height(max);
		   //  }
 	}
 	


    /**
     * Search Box
     */ 
    
    var sword = '.searchbox-sword';
    var sbox = '.sword-border';
    var form = '.indexedsearch';
    var button = '.searchbox-button';
    //var color = '#208ccc';
    
    var focus = false;
   $(sbox).hide("slide", { direction: "right" }, 1);
   // sb_off();
    
     $(button).hover( function() {
		sb_on();		
     }, function() {
		setTimeout(sb_off,1500);		
	 } );
     
     function sb_off() {
     	if (!focus) {
     		     	 
	     	$(sbox).hide("slide", { direction: "right" }, 500);
	     	
	     	setTimeout(function() {
	     		$(sbox).css("z-index", "-9999"); 
		     	$(form).css("z-index", "100");
		     	
		     	$(button).animate().removeClass('fill');
	     		$(button).attr('src','fileadmin/hkk/images/search_blue.png');
	     	}, 500);
	     	
    
	    }
     }
     function sb_on() {
     	$(button).animate().addClass('fill');
     	$(button).attr('src','fileadmin/hkk/images/search_white.png');
     
     	$(form).css("z-index", "501"); 
     	$(sbox).css("z-index", "9999");  
     	$(sbox).show("slide", { direction: "right" }, 500);
     	   	
     	
     }
     
     $(sword).focus( function()
     { 
     	focus = true;
     });
     
     $(sword).blur( function() {
     	focus = false;
     	setTimeout(sb_off,1500);     	
     });
     
     /**
      * Fixedmenu
      */
     
        var header = $(".menu");
        var slider = $(".slider");
        var zirkel = $(".zirkel");
        var titlebar = $(".titlebar");

     checkScrollPosition();
       
    function checkScrollPosition() {
    	var y = $(document).scrollTop();
	    if (y >= 40) //  &&  $(window).width() >= 959 ) 
	    {	
	        $('body').addClass('scrollfixed');
	    } else {
	        $('body').removeClass('scrollfixed');
	    }
    }

     
    $(document).scroll( function() { checkScrollPosition(); });	
    //$(document).resize( function() { checkScrollPosition(); });	

	/*
	 * Opacity Effekt ScrollUp Link
	 */ 
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().addClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().removeClass("opacity50");
		}
	);
	
	$('.burger').click(function(){
		$('.mm').toggleClass("expanded");
		$('.ulmenu').slideToggle("fast");
	});
		
	/**
	 * Smooth Scrollup
	 */
	
	$(function() {
	  	$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 800);
		        return false;
	      	  }
	    	}
	  	});
	});
	
	/**
	 * Menu Fix
	 */
	
	$(window).resize(function() {
		if ($(window).width() >= 960) {
			$('ul.mainmenu').fadeIn('fast');
		} else {
			$('ul.mainmenu').hide();
		}
	});

	// bxSlider
	console.log('Vor Slider');
		
	var bxslider = $('.bxslider').bxSlider({
		mode : 'fade',
		useCSS : 'false'
	});
/*	
	var slider = $('.slider'),
		img = $('.sliderimg img');


	function resizeImage() {
		//console.log("Height img" + img.height());
		if (slider.height() > img.height() ) {
			img.addClass('scaleheight');
			//$('.sliderimg img').each().addClass('scaleheight');
		} else {
			img.removeClass('scaleheight');
			$('.sliderimg img').each().removeClass('scaleheight');
		}
		//bxslider.destroySlider();
		//bxslider.bxSlider();
	}
	*/
	$('.bxslider img').unwrap().unwrap().unwrap().unwrap().unwrap();
	//unnötige Wraps entfernen.

	$('.bxslider .csc-textpic-text').addClass('container');
	
	//resizeImage();
	//	$(window).resize(resizeImage);
	
		 console.log('Ende');

});
