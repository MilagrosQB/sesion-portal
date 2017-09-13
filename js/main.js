/*Registro*/
     jQuery(document).ready(function() {
     	jQuery('input[type="radio"]').click(function() {
     		if(jQuery(this).attr('id') == 'opcion-nacionalidad1') {
     			jQuery('#con-dni').show();           
     		}
     		else {
     			jQuery('#con-dni').hide();   
     		}
     	});
     	jQuery('input[type="radio"]').click(function() {
     		if(jQuery(this).attr('id') == 'opcion-nacionalidad2') {
     			jQuery('#sin-dni').show();           
     		}
     		else {
     			jQuery('#sin-dni').hide();   
     		}
     	});	
     });