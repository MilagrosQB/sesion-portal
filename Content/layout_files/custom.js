//RSC >> Funciones Generales

/*Ref. Cerrar Modal Popup (Video en Slider Home)*/
function cerrarModal() {
  jQuery('.modal-backdrop').remove();  //alert('Removed!');
}
//RSC >> Template Customizing
jQuery(document).ready(function () {
  /*RS - Prensa > Noticias (Listado) */
  jQuery('#itemListPrimary a.k2ReadMore').html('Leer más');
  //RSC >> Comunicados "Marquee" Customizing
  //jQuery('#sp-user2 .header').prepend('<i class="icon-bell-alt"></i>');
  //jQuery('#sp-user2 .header').append('<span style="display:inline; margin-left:-0.2em;">:</span>');

  //RSC >> Breadcumbs 
  /*jQuery('ul.breadcrumb li:first').prepend('<i class="icon-sitemap"></i>Ud. está aquí:');*/
  //document.getElementById("#myId").innerHtml = "asdas";

  //RSC >> Footer 
  jQuery('#sp-footer1').removeClass().addClass('span4');
  jQuery('#sp-footer2').removeClass().addClass('span8');

  //RSC >> Default Article Lenguage (Details)
  jQuery('#sp-component span.category-name').html(function (index, html) {
    return html.replace('Category', 'Categoría');
  });
  /*jQuery('#sp-component .itemCommentsLink').html(function(index,html){
  return html.replace('comment','Comentarios');     
});*/
  jQuery('#sp-component .itemHits').html(function (index, html) {
    return html.replace('times', 'Visto');
  });
  //jQuery('#sp-component .publish-date').each(function(){
  jQuery('#sp-component .itemDateCreated, #sp-component .publish-date').each(function () {
    jQuery(this).html(function (index, html) {

      return html.replace('Published', 'Publicado')
        .replace('Tuesday', 'Martes')
        .replace('Monday', 'Lunes')
        .replace('Wednesday', 'Miércoles')
        .replace('Thursday', 'Jueves')
        .replace('Friday', 'Viernes')
        .replace('Saturday', 'Sábado')
        .replace('Sunday', 'Domingo')
        .replace('January', 'de Enero del')
        .replace('February', 'de Febrero del')
        .replace('March', 'de Marzo del')
        .replace('April', 'de Abril del')
        .replace('May', 'de Mayo del')
        .replace('June', 'de Junio del')
        .replace('July', 'de Julio del')
        .replace('August', 'de Agosto del')
        .replace('September', 'de Setiembre del')
        .replace('October', 'de Octubre del')
        .replace('November', 'de Noviembre del')
        .replace('December', 'de Diciembre del')
    });

  });
  jQuery('#sp-component .by-author').html(function (index, html) {
    return html.replace('Written by', 'Escrito por');
  });
  jQuery('#sp-component .print-icon a').html(function (index, html) {
    return html.replace('Print', 'Imprimir');
  });
  jQuery('#sp-component .email-icon a').html(function (index, html) {
    return html.replace('Email', 'Enviar al Correo');
  });

  //RSC >> Marquee WebLinks 
  //jQuery('.marqueeClass .mod-content').attr('scrollamount','2');
  //jQuery('.marqueeClass .mod-content').marquee('marqueeInner');


  //RSC >> Custom-2 (Edit 2016)

  /*Header*/
  jQuery('#sp-logo').hide();
  jQuery('#sp-top1').removeClass().addClass('span12');

  var getLogo = jQuery('#sp-logo').html(); //alert(getLogo);

  /*jQuery('#sp-menu li.first:first').html(jQuery('#sp-logo .logo-wrapper'));*/
  //jQuery('#sp-logo .logo-wrapper').html();

  jQuery('#sp-header-wrapper .container .row-fluid').prepend(getLogo);

  function fnResponsive() {
    var getWidth = jQuery('body').width();
    if (getWidth <= 979) {
      jQuery('#sp-header-wrapper .container .row-fluid .logo-wrapper').show();
      jQuery('#sp-header-wrapper .container .row-fluid #sp-menu .logo-wrapper').hide();
      /*jQuery('#sp-logo').hide();
      jQuery('#sp-top1').removeClass().addClass('span12');*/
    } else {
      jQuery('#sp-header-wrapper .container .row-fluid .logo-wrapper').hide();
      jQuery('#sp-header-wrapper .container .row-fluid #sp-menu .logo-wrapper').show();
      /*jQuery('#sp-logo').show();
      jQuery('#sp-top1').removeClass().addClass('span6');*/
    }
  }

  //jQuery('#sp-header-wrapper .container .row-fluid #sp-menu .logo-wrapper').show();
  fnResponsive();
  jQuery(window).resize(function () {
    fnResponsive(); //alert('asd');
  });

  //jQuery('#sp-menu li.first:first').html(jQuery('#sp-logo .logo-wrapper'));
  //jQuery('#sp-logo .logo-wrapper').html();

  /*Menú Principal (Anchos)*/
  /*jQuery('#sp-menu').toggleClass('span9 span12');*/
  //jQuery('#sp-search').toggleClass('span3 span0');
  jQuery('#sp-search').css('display', 'none');

  //Zona "Iconos Cabecera"
  /*jQuery('#sp-top1 .iconHolder').hover(function(){
      //alert('Getting in!');
      jQuery(this).find('img').attr('src', function (i, src) {
          return src.replace("/grey/", "/red/");
      })
  }, function () {
      jQuery(this).find('img').attr('src', function (i, src) {
          return src.replace("/red/", "/grey/");
      })
  });*/

  //Comunicados3
  var titleComunicados = '<h3 class="titleComunicados"><i class="icon-bullhorn"></i> Comunicados</h3>';
  var socialIcons = '';
  socialIcons += '<div class="home-social-icons">';
  socialIcons += '<a href="https://www.facebook.com/minproduccion?fref=ts" target="_blank"><i class="social-round social-fa" data-toggle="tooltip" data-placement="top" title="Facebook"></i></a>';
  socialIcons += '<a href="https://twitter.com/MINPRODUCCION" target="_blank"><i class="social-round social-tw" data-toggle="tooltip" data-placement="top" title="Twitter"></i></a>';
  socialIcons += '<a href="https://www.flickr.com/photos/ministeriodelaproduccion/sets/" target="_blank"><i class="social-round social-fl" data-toggle="tooltip" data-placement="top" title="Flickr"></i></a>';
  socialIcons += '<a href="https://www.youtube.com/user/PRODUCEGOB/" target="_blank"><i class="social-round social-yo" data-toggle="tooltip" data-placement="top" title="Youtube"></i></a>';
  socialIcons += '</div>';
  jQuery('#sp-home-page-title-wrapper .container').prepend(titleComunicados);
  jQuery('#sp-home-page-title-wrapper .container').append(socialIcons);
  //Controles & Marquee
  /*function marqueeStart(){ 
    jQuery('.vina-is-slide').marquee({pauseOnHover: true, duration:7000, delayBeforeStart:1000 })
  }
  marqueeStart();*/
  /*startVisible:true, delayBeforeStart:1000, duplicated:true, gap:1000*/
  //function alertTest(){alert("TEsting!!");}
  //setTimeout(alertTest, 5000);
  //setInterval(marqueeStart, 16000);

  /*jQuery('[class^="jssord"]').click( function(){
    jQuery('.vina-is-slide').marquee('destroy');
    jQuery('.vina-is-slide').marquee({pauseOnHover: true, duration:8000, delayBeforeStart:1000});
  });*/


  //Zona "Servicios En Línea"
  //jQuery('#sp-users-wrapper').parallax({imageSrc: 'templates/vina_royal_ii/images/timthumb.jpg'},{bleed:100});
  //jQuery('#sp-user3 .header').prepend('<i class="icon-cloud icon-custom2"></i>');    
  //jQuery('#sp-user3 .gkTabsWrap li').prepend('<div class="img-custom"></div>');

  /*Accesos Sectores - Efecto Cambio de color Iconos*/
  jQuery('#sp-breadcrumb-wrapper .AccesosSectores .box-custom').each(function () {
    var urlMiniBanner = jQuery(this).find('a').attr('href'); //alert(urlMiniBanner);
    jQuery(this).click(function () {
      window.location.href = urlMiniBanner;
    });
  });
  jQuery('#sp-breadcrumb-wrapper .AccesosSectores .box-custom').hover(function () {
    //alert('Getting in!');
    jQuery(this).find('.box-descrip a').css('color', '#ce0a04');
    jQuery(this).css('cursor', 'pointer');
    jQuery(this).find('.box-access a img').attr('src', function (i, src) {
      return src.replace("W.png", "RED.png");
    })
  }, function () {
    jQuery(this).find('a img').attr('src', function (i, src) {
      return src.replace("RED.png", "W.png");
    })
    jQuery(this).find('.box-descrip a').css('color', '#fff'); //58595C
  });

  /*Efecto - Tooltips*/
  jQuery('[data-toggle="tooltip"]').tooltip();
  jQuery('[data-toggle="popover"]').popover();

  //Zona "3 columnas"
  /*Columna Izq*/
  //jQuery('#sp-left .accordion-group .in').css('border','1px solid green');
  //jQuery('#sp-left .accordion-group .in').closest('.accordion-group').find('.accordion-heading').css('border','1px solid blue');
  /*jQuery("#sp-left .accordion-group").live('ready',function(){
      jQuery('#sp-left .accordion-group .in').css('border','1px solid green');
  });*/

  //Zona "Accesos Directos (Bottom)"
  //jQuery('#sp-bottom-wrapper .header').prepend('<i style="margin-right:17px;"><img src="/images/icons/icon-external.png" align="absmiddle"/></i>');    
  //jQuery('#sp-bottom-wrapper').parallax({imageSrc: '/images/custom/bg_bottom.jpg'},{bleed:100});        

  //Custom Code ONLY for Home
  if (jQuery('header #sp-menu li').first().hasClass('active')) {
    //alert('teasd!');
    //Zona "3 columnas"
    jQuery('#sp-left').removeClass().addClass('span6'); //span4
    jQuery('#sp-message-area').removeClass().addClass('span5');
    //jQuery('#sp-center').removeClass().addClass('span6');
    jQuery('#sp-right').removeClass().addClass('span12');
    jQuery('#sp-right .module').addClass('sp-vina');
  }


  jQuery(window).click(function () {
    jQuery('#myModal').remove();

  });

  jQuery('#myModalInner').click(function (event) {
    event.stopPropagation();
  });

  /*function cerrar(){
    alert('Removed!');
  }*/
  /*jQuery('#removeModal').click(function(){
      //jQuery('#myModal').remove();
      alert('Removed!');
  });*/

  //Line 110 - Zona "Anuncios (Slider 100%)"
  var strFirstLink = "";
  //jQuery('#fav-caption a p').prepend('<i class="icon-file"></i>'); //Agregar icono 
  jQuery('#fav-caption h3').each(function () {
    jQuery(this).parent().css('background', 'rgba(17, 17, 17, 0.50)'); /*37 67*/
    var getFecha = jQuery(this).parent().parent().find('a img').attr('alt'); //alert(getFecha);
    if (getFecha.length > 0) {
      //alert(getFecha);
      var tmpLink = jQuery(this).parent().find('a').clone();
      jQuery(this).parent().find('a').remove();
      jQuery(this).parent().append('<span class="date">' + getFecha + '</span>');
      jQuery(this).parent().append(tmpLink);
    }
  });
  /*jQuery('#fav-caption').each(function(){
    //jQuery(this).find('a p').prepend('<i class="icon-file"></i>');
    //jQuery(this).find('a').appendTo(jQuery(this).find('h3'));
    strFirstLink = jQuery(this).find('a')[0].outerHTML; alert(strFirstLink);
    //jQuery(this).find('h3').append(strFirstLink);
    jQuery(this).find('h3').append('<a href="#url" class="videobtn" data-toggle="modal" data-target=".bs-example-modal-lg"></a>');
    jQuery(this).find('p.favdescription').addClass('btn');
    jQuery(this).find('p.favdescription').appendTo('#fav-caption h3 a.videobtn');
    //var urlVideo = jQuery('#fav-caption p.favdescription').html();
    //jQuery('#fav-caption a.videobtn').attr('href',jQuery('#fav-caption p.favdescription').html());
    
    var IdVideoEmbed = jQuery('#fav-caption p.favdescription').html(); //alert(IdVideoEmbed);
    if(IdVideoEmbed){ IdVideoEmbed = IdVideoEmbed.replace(/\s/g,''); } 
    //alert(IdVideoEmbed); alert('asdasdddd873');                 
    jQuery('#fav-caption a.videobtn p').html('<i class="icon-youtube-play"></i> Ver Video');
    jQuery('#fav-caption a.videobtn').click(function(){
      jQuery('body').append('<div id="myModal" style="" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div id="removeModal" onclick="cerrarModal(); ">Cerrar <i class="icon-remove-sign"></i></div>   <div id="myModalInner" class="modal-dialog modal-lg" role="document"> <div class="modal-content"><iframe width="840" height="630" src="https://www.youtube.com/embed/'+IdVideoEmbed+'" frameborder="0" allowfullscreen></iframe></div></div> </div>');
    });
  });*/
  /*jQuery('#fav-caption a p').prepend('<i class="icon-file"></i>');
  jQuery('#fav-caption a').appendTo('#fav-caption h3');
  jQuery('#fav-caption h3').append('<a href="#url" class="videobtn" data-toggle="modal" data-target=".bs-example-modal-lg"></a>');
  jQuery('#fav-caption p.favdescription').addClass('btn');
  jQuery('#fav-caption p.favdescription').appendTo('#fav-caption h3 a.videobtn');
//var urlVideo = jQuery('#fav-caption p.favdescription').html();
  //jQuery('#fav-caption a.videobtn').attr('href',jQuery('#fav-caption p.favdescription').html());
  
  var IdVideoEmbed = jQuery('#fav-caption p.favdescription').html(); //alert(IdVideoEmbed);
  if(IdVideoEmbed){ IdVideoEmbed = IdVideoEmbed.replace(/\s/g,''); } 
  //alert(IdVideoEmbed); alert('asdasdddd873');                 
  jQuery('#fav-caption a.videobtn p').html('<i class="icon-youtube-play"></i> Ver Video');
jQuery('#fav-caption a.videobtn').click(function(){
    jQuery('body').append('<div id="myModal" style="" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"> <div id="removeModal" onclick="cerrarModal(); ">Cerrar <i class="icon-remove-sign"></i></div>   <div id="myModalInner" class="modal-dialog modal-lg" role="document"> <div class="modal-content"><iframe width="840" height="630" src="https://www.youtube.com/embed/'+IdVideoEmbed+'" frameborder="0" allowfullscreen></iframe></div></div> </div>');
  });*/


  /*Ref. Modal Videos (Cerrar / Remove) */
  jQuery(window).click(function () {
    jQuery('#myModal').remove();
  });
  jQuery('#myModalInner').click(function (event) {
    event.stopPropagation();
  });

  //Ref. News > Social Icons 
  jQuery('.sharebuttons').appendTo('.itemLinks');
  jQuery('.fb_like').css('position', 'relative');
  jQuery('.fb_like').css('left', '-110px');

  //Ref. General
  jQuery('iframe').attr('frameborder', '0');

  //Ref. General > Bottom Content
  jQuery('#sp-bottom1, #sp-bottom2').removeClass().addClass('span12');

  //Ref. Google Search
  var googleSearch = "<div><script>  (function() {    var cx = '003556429015218661219:blgtyt_pgp4';    var gcse = document.createElement('script');    gcse.type = 'text/javascript';    gcse.async = true;    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;    var s = document.getElementsByTagName('script')[0];    s.parentNode.insertBefore(gcse, s);  })();</script><gcse:searchresults-only></gcse:searchresults-only></div>";
  jQuery('body.menu-buscador #sp-component-area .entry-content').prepend(googleSearch);

  //Ref. Responsive Fixing > Menu
  jQuery('button.hidden-desktop').click(function () {
    jQuery('.hidden-desktop.sp-mobile-menu').addClass('show-force');
  });
  jQuery('button.hidden-desktop.vina-menu-small').click(function () {
    jQuery('.hidden-desktop.sp-mobile-menu').removeClass('show-force'); //alert('Test');
  });

  //Ref. Portal de Datos Abiertos (Oct. 2016)
  jQuery('body.menu-portal-datos-abiertos #sp-main-body-wrapper').prepend('<div class="pda_slide"><img src="/images/pda/cabecera_completa2x.jpg.jpg" style="width:100%; height:auto;"/></div>');

  //Ref. Eventos
  jQuery('#jevents').closest('#sp-message-area').removeClass().addClass('span12');
  function eventsTranslate() {
    jQuery('#jevents').each(function () {
      jQuery(this).html(function (index, html) {
        return html.replace('From&nbsp;', '<b>Inicio: </b>')
          .replace('To&nbsp;', '<b>Fin: </b>')
          .replace('Location :', 'Lugar:')
          .replace('Contact :', 'Contacto:')
          .replace('Back', 'Volver')
          .replace('Events Calendar', 'Detalles del Evento')
          .replace('Monday', 'Lunes')
          .replace('Tuesday', 'Martes')
          .replace('Wednesday', 'Miércoles')
          .replace('Thursday', 'Jueves')
          .replace('Friday', 'Viernes, ')
          //.replace('Friday','Viernes, ')
          .replace('Saturday', 'Sábado')
          .replace('Sunday', 'Domingo')
          .replace('January', 'de Enero del')
          .replace('February', 'de Febrero del')
          .replace('March', 'de Marzo del')
          .replace('April', 'de Abril del')
          .replace('May', 'de Mayo del')
          .replace('June', 'de Junio del')
          .replace('July', 'de Julio del')
          .replace('August', 'de Agosto del')
          .replace('September', 'de Setiembre del')
          .replace('October', 'de Octubre del')
          .replace('November', 'de Noviembre del')
          .replace('December', 'de Diciembre del')
      });
    });
  }
  eventsTranslate(); eventsTranslate();

  //RSC >> Comunicados (2017)
  var strSocialIcons = "<div class='bt-social'>";
  strSocialIcons += "<a href='https://www.facebook.com/minproduccion?fref=ts' target='_blank'><img src='/images/icons/facebook.png' border='0'/></a>";
  strSocialIcons += "<a href='https://twitter.com/MINPRODUCCION' target='_blank'><img src='/images/icons/twitter.png' border='0'/></a>";
  strSocialIcons += "<a href='https://www.youtube.com/user/PRODUCEGOB/' target='_blank'><img src='/images/icons/youtube.png' border='0'/></a>";
  strSocialIcons += "<a href='https://www.flickr.com/photos/ministeriodelaproduccion/sets/' target='_blank'><img src='/images/icons/picassa.png' border='0'/></a>";
  strSocialIcons += "</div>";
  jQuery('#sp-user1 .header').append(strSocialIcons);
  jQuery('#sp-user1 .slide .bt-introtext').each(function () {
    var extFilters = ['pdf', 'doc', 'jpg', 'zip'];
    //var urlComunic = jQuery(this).find('a').attr('href'); //alert(urlComunic);
    var txtComunic = jQuery(this).text().split('http'); //console.log(txtComunic[1]);
    var urlComunic = "";
    jQuery(this).html(txtComunic[0]);
    if (
      txtComunic[1].indexOf('.zip') > -1 ||
      txtComunic[1].indexOf('.pdf') > -1 ||
      txtComunic[1].indexOf('.doc') > -1 ||
      txtComunic[1].indexOf('.xls') > -1 ||
      txtComunic[1].indexOf('.png') > -1
    ) {
      urlComunic = "<div class='bt-action'><a href='http" + txtComunic[1] + "' target='_blank'><img src='/images/icons/download_r_small.png' border='0' /> Descargar</a></div>";
    } else {
      urlComunic = "<div class='bt-action'><a href='http" + txtComunic[1] + "' target='_blank'><img src='/images/icons/link_r_small.png' border='0' /> Ir al link</a></div>";
    }
    jQuery(this).parent().parent().append(urlComunic);

  });
  var strLine = "<div class='bt-line'></div>";
  jQuery('#sp-user1 .header').parent().find('.mod-content').append(strLine);

  //RSC >> Accordions 2017 (Home)
  var nAccordionBody = "";
  jQuery('#sp-users-wrapper .accordion-heading a, #sp-bottom-wrapper .accordion-heading a').click(function () {
    jQuery('#sp-users-wrapper .accordion-heading a, #sp-bottom-wrapper .accordion-heading a').removeClass('expanded');
    nAccordionBody = jQuery(this).parent().parent().find('.accordion-body.in').length; //alert(nAccordionBody);
    if (nAccordionBody == 0) {
      jQuery(this).addClass('expanded'); //alert('True');
    } else {
      jQuery(this).removeClass('expanded'); //alert('False');
    }
  });

  //RSC >> Aplicaciones web (2017)
  jQuery('#sp-main-body-wrapper .AppsWeb .appLogo a').hover(function () {
    //alert('Getting in!');
    jQuery(this).find('img').attr('src', function (i, src) {
      return src.replace(".png", "_color.png");
    })
  }, function () {
    jQuery(this).find('img').attr('src', function (i, src) {
      return src.replace("_color.png", ".png");
    })
  });/**/

  //RSC >> Sector Pesca - Internas
  var checkCols = jQuery('.vina-menu-accordion').length;
  //console.log(checkCols);
  if (checkCols > 0) {
    //jQuery('.menu-sector-pesca #sp-main-body-wrapper #sp-left').removeClass('span3').addClass('span4');
    jQuery('#sp-main-body-wrapper #sp-left').removeClass('span3').addClass('span4');
    jQuery('#sp-main-body-wrapper #sp-left .content-vina').css('width', '100%');
    jQuery('#sp-main-body-wrapper #sp-message-area').removeClass('span9').addClass('span8');
  }

  //RSC >> Noticias Listado (2017)
  jQuery('#k2Container .catItemIntroText.media-body').each(function () {
    var strImagePublic = jQuery(this).find('img').clone(); //console.log(strImagePublic);
    var strLinkDetails = jQuery(this).find('a.k2ReadMore').parent().clone();

    var txtIntroNews = jQuery(this).text().length; console.log(txtIntroNews);
    jQuery(this).text(jQuery(this).text().substring(0, 500));
    jQuery(this).append('...');
    jQuery(this).prepend(strImagePublic);
    jQuery(this).append(strLinkDetails);

  });

  //RSC >> Menu Responsive
  var menuExtraLinks = "";
  menuExtraLinks += "<div class='menu-extra-links'>";
  menuExtraLinks += "<p><a href='https://registroportal.produce.gob.pe/'>Iniciar sesión</a></p>";
  menuExtraLinks += "<p><a href='https://registroportal.produce.gob.pe/Home/Index?id=1'>Registro</a></p>";
  menuExtraLinks += "<p><a href='https://extranet.produce.gob.pe/'>Intranet</a></p>";
  menuExtraLinks += "<p><a href='/index.php/shortcode/servicios-al-cuidadano/contactate-con-nosotros'>Contáctenos</a></p>";
  menuExtraLinks += "</div>";
  jQuery('.sp-mobile-menu').append(menuExtraLinks);

  jQuery('.sp-mobile-menu li').click(function () {
    var menuState = jQuery(this).children('ul.in').text().length; //alert(menuState);
    if (menuState != 0) {
      //Menu Closing
      //alert('menuState = This <li> has Class "opened" finded! (because ul.in)');
      jQuery(this).parent().children('li').css('display', 'block');//.css('border','1px solid green');
      jQuery(this).children('ul').removeClass('in');
      jQuery(this).children('a').removeClass('menu-level-title');//.css('font-size','15px');
      jQuery(this).children('span').css('float', 'right').children('i.icon-angle-left').removeClass().addClass('icon-angle-right');
      jQuery(this).parent().parent().children('a').css('display', 'initial');
      jQuery(this).parent().parent().children('span').css('display', 'block');

      jQuery(this).removeClass('opened');
    } else {
      //Menu Opening
      //alert('menuState = NOT opened');
      //jQuery('.sp-mobile-menu li').css('display','none');
      jQuery(this).parent().children('li').css('display', 'none');
      jQuery(this).css('display', 'block');
      jQuery(this).children('a').addClass('menu-level-title');//.css('font-size','1.5em');
      jQuery(this).children('span').css('float', 'left').children('i.icon-angle-right').removeClass().addClass('icon-angle-left');
      jQuery(this).parent().parent().children('a').css('display', 'none');
      jQuery(this).parent().parent().children('span').css('display', 'none');
      //jQuery(this).parent().parent().children('span > i.icon-angle-left').removeClass().addClass('icon-angle-right');

      //jQuery(this).children('a').css('display','none');
      //jQuery(this).children('span').css('display','none');
      jQuery(this).addClass('opened');
      jQuery(this).children('ul').addClass('in');//.css('border','1px solid orange');
      jQuery(this).find('ul.in > li').css('display', 'block !important').css('border', '1px solid yellow');
    }

    var menuBottom = jQuery('.sp-mobile-menu li.opened').text().length; //alert(menuState);
    if (menuBottom != 0) {
      jQuery('.menu-extra-links').fadeOut(); //.css('display','none')
    } else {
      jQuery('.menu-extra-links').fadeIn(); //css('display','block')
    }

    event.stopPropagation();
  });


  //RSC >> Servicios en línea (Accordion)
  jQuery('.responsive #sp-users-wrapper .container #sp-user3 .accordion ul li:nth-child(even)').each(function () {
    jQuery('<hr class="row-separator" style=""/>').insertAfter(this);
  });

  //RSC >> Sector Pesca - Identificación de Enlaces
  jQuery('ul.links-summary li a').each(function () {
    var getLinkType = jQuery(this).attr('href'); //console.log(getLinkType);
    var cssLinkType = "";
    if (getLinkType.indexOf('.pdf') > -1) { cssLinkType = "url-download"; }
    else if (getLinkType.indexOf('.zip') > -1) { cssLinkType = "url-download"; }
    else if (getLinkType.indexOf('.doc') > -1) { cssLinkType = "url-file"; }
    else if (getLinkType.indexOf('.xls') > -1) { cssLinkType = "url-file"; }
    else if (getLinkType.indexOf('produce.gob.pe') < 0 && getLinkType.charAt(0) != "/" && getLinkType.charAt(0) != "#") { cssLinkType = "url-external"; }
    else if (getLinkType.indexOf('.produce.gob.pe') > -1) { cssLinkType = "url-external"; }
    else if (getLinkType.length < 2) { cssLinkType = "url-nolink"; }
    else { cssLinkType = "url-link"; }
    jQuery(this).parent().removeClass().addClass(cssLinkType);
  });

  //RSC >> Carousel Vertical (Desktop & Mobile)
  jQuery('div.carousel-vertical table tr td.mod_events_latest .calendarEvent').each(function () {
    jQuery(this).appendTo('div.carousel-vertical table tr td.mod_events_latest_first'); //alert('test');
  });
  //jQuery('div.carousel-vertical table tr td.mod_events_latest_first > div.calendarInfo .detail p img').css('border','1px solid red');
  var iEvent = 0; var iTemp = 0;
  var maxHeight = -1;
  var hEvent = "";
  var vEvent = "";
  var sEvent = "";
  var uEventBullet = "";
  if (jQuery(window).width() <= 768) {
    vEvent = 1;
    uEventBulletSimple = "/images/icons/minimal-bullet-simple.png";
    uEventBulletActive = "/images/icons/minimal-bullet-active.png";
  } else {
    vEvent = 2;
    uEventBulletSimple = "/images/icons/events-bullet-simple.png";
    uEventBulletActive = "/images/icons/events-bullet-active.png";
  }
  jQuery('div.carousel-vertical .mod-wrapper').append('<div class="eventBullets" style=""></div>');
  jQuery('div.carousel-vertical table tr td div.calendarEvent .calendarInfo .detail').each(function () {
    iTemp = iTemp + 1;
    jQuery(this).text(jQuery(this).text().substring(0, 90));
    jQuery(this).append('...' + (iTemp));
  }); //alert(iTemp);
  jQuery('div.carousel-vertical table tr td div.calendarEvent').each(function () {
    //alert(jQuery(this).height());
    if (jQuery(window).width() <= 768) { jQuery(this).css('display', 'block').css('height', '230px'); }
    maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
  }); //alert(maxHeight);
  jQuery('div.carousel-vertical table tr td div.calendarEvent').each(function () {
    iEvent = iEvent + 1; //alert('iEvent = '+iEvent);
    jQuery(this).height(maxHeight);
    //hEvent = jQuery('.carousel-vertical .calendarEvent').height(); //alert(hEvent);
    hEvent = maxHeight;
    if (jQuery(window).width() <= 768) {
      sEvent = iEvent * (hEvent + 0.0); //hEvent*iEvent + 1*iEvent
    } else {
      sEvent = iEvent * (hEvent + 0.4); //hEvent*iEvent + 1*iEvent
    }
    if (iEvent % vEvent == 0 && iEvent != iTemp) {
      jQuery('div.carousel-vertical .eventBullets').append('<a class="bulletGo" onclick="scrollEvents(' + sEvent + ')"><img src="' + uEventBulletSimple + '" border="0"/></a> ');
    }
  }); //alert("Finally "+hEvent);
  //console.log(maxHeight);
  if (iEvent > 2) {
    jQuery('div.carousel-vertical .eventBullets').prepend('<a class="bulletGo" onclick="scrollEvents(0)"><img src="' + uEventBulletActive + '" border="0"/></a> ');
  }
  if (iEvent % 2 != 0) {
    jQuery('div.carousel-vertical td.mod_events_latest_first').append('<div class="calendarEventNull" style="height:' + hEvent + 1 + 'px">&nbsp;</div>');
  }
  jQuery('div.carousel-vertical .mod-content').height((hEvent * vEvent));
  jQuery('div.carousel-vertical a.bulletGo').click(function () {
    jQuery('div.carousel-vertical a.bulletGo img').attr('src', uEventBulletSimple);
    jQuery(this).find('img').attr('src', uEventBulletActive);
  });

  /*Comunicados*/
  var wLayout = jQuery(window).width();
  if (wLayout <= 1024 && wLayout > 768) {
    var wComunicados = jQuery('.homepage #sp-users-wrapper #sp-user1 .header').width(); //alert(wComunicados);
    /*var hComunicados = -1;
    jQuery('.homepage #sp-users-wrapper #sp-user1 .bt-row').each(function(){
      alert(jQuery(this).height());
      hComunicados = hComunicados > jQuery(this).height() ? hComunicados : jQuery(this).height();
    }); alert("fINALLY:"+hComunicados);*/
    var hComunicados = 200;
    jQuery('.homepage #sp-users-wrapper #sp-user1 #btcontentslider255').width(wComunicados);
    jQuery('.homepage #sp-users-wrapper #sp-user1 .slides_container').width(wComunicados);
    jQuery('.homepage #sp-users-wrapper #sp-user1 .slide').width(wComunicados);
    //jQuery('.homepage #sp-users-wrapper #sp-user1 .mod_content').height(250);
    //jQuery('.homepage #sp-users-wrapper #sp-user1 .slides_control').width(hComunicados);
  } else if (wLayout <= 768) {
    var getComunicado = "";
    var sComunicado = "";
    var iComunic = 0;
    var uComunicBulletSimple = "/images/icons/minimal-bullet-simple.png";
    var uComunicBulletActive = "/images/icons/minimal-bullet-active.png";
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper').append('<div class="mod-content-minimal"><div class="minimal-wrapper"></div></div>');
    var wComunicado = jQuery('.mod-content-minimal').width(); //alert(wComunicado);

    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper').append('<div class="comunicBullets" style="width:100%; float:left; text-align:center;"></div>');
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-content .bt-row').each(function () {
      iComunic = iComunic + 1;
      getComunicado = jQuery(this).clone();
      jQuery('.mod-content-minimal .minimal-wrapper').append(getComunicado);
      jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper .comunicBullets').append('<a class="bulletGo" onclick="scrollComunic(' + wComunicado * iComunic + ')"><img src="' + uComunicBulletSimple + '" border="0"/></a> ');
      if (iComunic == 2) {
        jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper .comunicBullets').prepend('<a class="bulletGo" onclick="scrollComunic(0)"><img src="' + uComunicBulletActive + '" border="0"/></a> ');
      }
    });
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-content').remove();
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-content-minimal .minimal-wrapper .bt-row').width(wComunicado);
    jQuery('.comunicBullets a.bulletGo').click(function () {
      jQuery('.comunicBullets a.bulletGo img').attr('src', uComunicBulletSimple);
      jQuery(this).find('img').attr('src', uComunicBulletActive);
    });

    //Redes Sociales (Responsive Extra Small)
    var getRedesSociales = "";
    getRedesSociales = jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper .header .bt-social').clone(); //alert(getRedesSociales);
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper').append(getRedesSociales);
    jQuery('.homepage #sp-users-wrapper #sp-user1 .mod-wrapper .header .bt-social').remove();

    //Aplicaciones Web (Responsive Extra Small)
    var iAppWeb = 0;
    var hAppWeb = 124;
    var vAppWeb = 2;
    var uBulletSimple = "/images/icons/minimal-bullet-simple.png";
    var uBulletActive = "/images/icons/minimal-bullet-active.png";
    jQuery('.homepage #sp-main-body-wrapper #sp-left .custom').append('<div class="AppWebBullets" style="width:100%; float:left; text-align:center;"></div>');
    jQuery('.homepage #sp-main-body-wrapper #sp-left .AppsWeb').height(hAppWeb * vAppWeb).css('overflow', 'hidden');
    jQuery('.homepage #sp-main-body-wrapper #sp-left .AppsWeb .appLogo').each(function () {
      iAppWeb = iAppWeb + 1;
      if (iAppWeb % vAppWeb == 0) {
        jQuery('.homepage #sp-main-body-wrapper #sp-left .custom .AppWebBullets').append('<a class="bulletGo" onclick="scrollAppWeb(' + hAppWeb * iAppWeb + ')"><img src="' + uBulletSimple + '" border="0"/></a> ');
      }
      if (iAppWeb == 2) {
        jQuery('.homepage #sp-main-body-wrapper #sp-left .custom .AppWebBullets').prepend('<a class="bulletGo" onclick="scrollAppWeb(0)"><img src="' + uBulletActive + '" border="0"/></a> ');
      }
    });
    jQuery('.homepage #sp-main-body-wrapper #sp-left .custom .AppWebBullets a.bulletGo:last').css('display', 'none');
    jQuery('.AppWebBullets a.bulletGo').click(function () {
      jQuery('.AppWebBullets a.bulletGo img').attr('src', uBulletSimple);
      jQuery(this).find('img').attr('src', uBulletActive);
    });



  }

  //RSC >> Footer Responsive ><
  //var wLayout = jQuery(window).width();
  if (wLayout <= 1024 && wLayout > 768) {
    //alert('Small Devices');
    var getCampanias = jQuery('#sp-bottom2 .custom .span3:last').clone();
    jQuery('#sp-bottom2 .custom .span3:last').remove();
    jQuery('#sp-bottom2 .custom .span3').removeClass('span3').addClass('span4');
    jQuery('#sp-bottom2').append(getCampanias);
    jQuery('#sp-bottom2 > .span3').removeClass('span3').addClass('span11');
    jQuery('#sp-bottom2 > .span11 hr').remove(); //jQuery('#sp-bottom2 > .span11').prepend('<hr>');
    jQuery('#sp-bottom2 > .span11 h4').addClass('span4');
    jQuery('#sp-bottom2 > .span11 a').addClass('span4').append('<span>Envíanos tu Traba</span>');
    /**/
    jQuery('#sp-bottom3 .custom .span3:last').remove();
    jQuery('#sp-bottom3 .custom .span3').removeClass('span3').addClass('span4');
    /**/
    jQuery('#sp-footer1').removeClass('span4').addClass('span12');
    jQuery('#sp-footer2').removeClass('span8').addClass('span12');
    jQuery('#sp-footer2').prependTo('#sp-footer-wrapper #footer');

  } else if (wLayout <= 768) {
    //alert('Extra Small Devices');
    jQuery('#sp-bottom2 .span3 h4').click(function () {
      if (jQuery(this).hasClass("opened")) {
        //alert('This is already opened!');
        jQuery(this).removeClass('opened');
        jQuery(this).parent().css('padding-bottom', '0');
        jQuery(this).parent().find('p').css('display', 'none');
        jQuery(this).parent().find('a').css('display', 'none');
      } else {
        jQuery('#sp-bottom2 .span3 h4').removeClass('opened');
        jQuery('#sp-bottom2 .span3 h4').parent().css('padding-bottom', '0');
        jQuery('#sp-bottom2 .span3 h4').parent().find('p').css('display', 'none');
        jQuery('#sp-bottom2 .span3 h4').parent().find('a').css('display', 'none');
        jQuery(this).addClass('opened');
        jQuery(this).parent().css('padding-bottom', '2em');
        jQuery(this).parent().find('p').css('display', 'block');
        jQuery(this).parent().find('a').css('display', 'inline');
      }
    });
    /*jQuery('#sp-bottom2 .span3 h4.opened').click(function(){

    });*/
  }

});

//Ref. Eventos - Carousel Vertical
function scrollEvents(sEvent) {
  //alert(sEvent);
  jQuery('div.carousel-vertical .mod-content').scrollTop(sEvent);
  jQuery(this).find('img').css('border', '1px solid red');
}

//Ref. Comunicados - Carousel Horizontal
function scrollComunic(sComunicado) {
  //alert(sEvent);
  jQuery('#sp-user1 .mod-content-minimal').scrollLeft(sComunicado);
  //jQuery(this).find('img').css('border','1px solid red');
}

//Ref. Comunicados - Carousel Horizontal
function scrollAppWeb(sAppWeb) {
  //alert(sEvent);
  jQuery('#sp-left .custom .AppsWeb').scrollTop(sAppWeb);
  //jQuery(this).find('img').css('border','1px solid red');
}

//Ref. Iframe Consultas de Trámites
function salirModal() {
  jQuery('#sp-breadcrumb-wrapper .contentWrapper .modal-custom-bg').remove();
  jQuery('#sp-breadcrumb-wrapper .contentWrapper .LoginConsultas #salirModal').remove();
  jQuery("iframe#consultaExpediente").attr('src', 'Consultas-en-Linea/expediente-home/general/consultaexpediente');
  jQuery('#sp-breadcrumb-wrapper .contentWrapper .LoginConsultas').removeClass('modal bs-example-modal-lg modal-custom-content');
  jQuery("iframe#consultaExpediente").attr('width', '250px');
  jQuery("iframe#consultaExpediente").attr('height', '281px');
  //alert('Salir de Iframe!');
}
jQuery("iframe#consultaExpediente").load(function () {
  var strTitle = jQuery(this).contents().find("h1").html(); //alert(strTitle); 
  if (strTitle.indexOf('Resultado') >= 0) {
    //
    jQuery('#sp-breadcrumb-wrapper .contentWrapper').append('<div class="modal-custom-bg"></div>');
    jQuery('#sp-breadcrumb-wrapper .contentWrapper .LoginConsultas').prepend('<div id="salirModal" onclick="salirModal(); ">Salir <i class="icon-remove-sign"></i> &nbsp;</div>');
    jQuery('#sp-breadcrumb-wrapper .contentWrapper .LoginConsultas').addClass('modal bs-example-modal-lg modal-custom-content');
    jQuery("iframe#consultaExpediente").attr('width', '100%');
    jQuery("iframe#consultaExpediente").attr('height', '100%');
    //jQuery("iframe#consultaExpediente").attr('scrolling','yes');
    //jQuery("iframe#consultaExpediente").css('overflow','scroll');
    jQuery("iframe#consultaExpediente").contents().find(".container").css('width', '97%');
    jQuery("iframe#consultaExpediente").contents().find(".container").css('margin-top', '20px');
    //alert('resultadoExpediente!!');
  }

});

//Header Fixed
jQuery(document).scroll(function (e) {
  var distanceTop = jQuery(window).scrollTop();
  if (distanceTop > 41) {
    jQuery('#sp-header-wrapper').attr('class', 'header-fixed');
  } else {
    jQuery('#sp-header-wrapper').removeClass('header-fixed');
  }
});
