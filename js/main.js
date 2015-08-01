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

	/**
	 * Youtube Iframe Respo Fix 
	 */
	
	var iframe = $('.content_right iframe');
	var gmaps = $('.inner_cbQuickGoogleMap');
	
	function resizeIframe() {
		var gwidth = gmaps.width();
		var iwidth = iframe.width();
		var gheight = (gwidth / 4) * 3;
		var iheight = (iwidth / 4) * 3;
		gmaps.height(gheight);
		iframe.height(iheight);
	}
	
	/**
	 * Menu Fix
	 */
	
	$(window).resize(function() {
		resizeIframe();
		//resizeImage();
		if ($(window).width() >= 945) {
			$('ul.mainmenu').fadeIn('fast');
		} else {
			$('ul.mainmenu').hide();
		}
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
	
	 // Fix for Responsive Gallery
     
     
     $('.unwrapper div.csc-textpic-imagecolumn').unwrap();
     //.each(function () {
     $('.unwrapper div.csc-textpic-imagecolumn').addClass('galleryfix');
     //}
     // End Fix
	
	
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
      
     var sc1 = $('.shortcodes_left .sc_item').height();
     var sc2 = $('.shortcodes_middle .sc_item').height();
     var sc3 = $('.shortcodes_right .sc_item').height();
     var max = sc1;
     
     console.log('Max: ' + max + " [sc1/2/3]: " + sc1 + " " + sc2 + " " + sc3);
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
		    
		     	$('.shortcodes_left .sc_item').height(max);
		     	$('.shortcodes_middle .sc_item').height(max);
		     	$('.shortcodes_right .sc_item').height(max);
		     	
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
		var isTouchDevice = 'ontouchstart' in document.documentElement;
     checkScrollPosition();
       
    function checkScrollPosition() {
    	var y = $(document).scrollTop();
	    if (y >= 40 && !isTouchDevice) //  &&  $(window).width() >= 959 ) 
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
	

	// bxSlider
	console.log('Vor Slider');
		
	var bxslider = $('.bxslider').bxSlider({
		mode : 'fade',
		useCSS : 'false'
	});
	
	var slider = $('.slider'),
		img = $('.sliderimg img');


	function resizeImage() {
		//console.log("Height img" + img.height());
		if (slider.height() > img.height() ) {
			img.addClass('scaleheight');
			img.css("height", slider.height());
			//$('.sliderimg img').each().addClass('scaleheight');
		} else {
			img.removeClass('scaleheight');
			img.css("height", "auto");
		//	$('.sliderimg img').removeClass('scaleheight');
		}
		//bxslider.destroySlider();
		//bxslider.bxSlider();
	}
	
	$('.bxslider img').unwrap().unwrap().unwrap().unwrap().unwrap();
	//unnötige Wraps entfernen.

	$('.bxslider .csc-textpic-text').addClass('container');
	
	//resizeImage();
	//	$(window).resize(resizeImage);
	//resizeImage();
		 console.log('Ende');

});
