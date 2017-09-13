
      //RSC >> Menú Lateral Desplegable (2015)
      jQuery(document).ready(function(){
        jQuery('ul.vina-categories ul').css('display','none');        
        jQuery('ul.vina-categories li.deeper').addClass('showMore');
        jQuery('ul.vina-categories li.active').parents("ul").css('display','block');
        //jQuery('ul.vina-categories li.deeper.active').addClass('showLess');
        jQuery('ul.vina-categories li.active').parents("ul").parent("li").addClass('showLess')
        
        jQuery('ul.vina-categories').find("li.deeper").click(function() {
          jQuery( this ).toggleClass( "showLess" );
        });
        
        jQuery( "ul.vina-categories").find("li").click(function(event) {
          //jQuery( this ).toggleClass( "showLess" );
          jQuery( this ).children("ul").toggle();
          event.stopPropagation();
        });
        
        //RSC >> Added 2017
        /*
        var newMenuAccordion = jQuery( ".menu-sector-pesca ul.vina-categories").length; //alert(newMenuAccordion);
        if(newMenuAccordion > 0){
          jQuery( ".menu-sector-pesca ul.vina-categories").find("li").click(function(event) {
            //jQuery( this ).toggleClass( "showLess" );
            jQuery( this ).find("ul").toggle();
            event.stopPropagation();
          }); 
        }
        */

        //RSC >> Menú Lateral Accordion (2017)
        jQuery('ul.vina-menu-accordion ul').css('display','none');        
        jQuery('ul.vina-menu-accordion li.deeper').addClass('showMore');
        jQuery('ul.vina-menu-accordion li.active').parents("ul").css('display','block');
		//jQuery('ul.vina-menu-accordion li.active').find("ul").css('display','block');
        jQuery('ul.vina-menu-accordion li.active').parents("ul").parent("li").addClass('showLess')
        jQuery('ul.vina-menu-accordion').find("li.deeper").click(function() {
          jQuery( this ).toggleClass( "showLess" );
        });
        jQuery( "ul.vina-menu-accordion").children("li").click(function(event) {
			//alert('asd22');
          //jQuery( this ).find("ul").toggle();
		  jQuery( this ).find("ul").css('display','block');
          event.stopPropagation();
        });
		jQuery('li.showLess ul').css('display','block');
        

	  });