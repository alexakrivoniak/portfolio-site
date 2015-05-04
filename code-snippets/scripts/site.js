/*
	@codekit-prepend "js-additions.js"
*/

window.codeSnippets = new function() {

	var codeSnippets;
	codeSnippets = this;
	code = {};

	function _onReady ( _event ) {
	  //createAnimatedBackground();
	  createBlurBackgroundOnScroll();
	  //animateBackgroundImageOnMouseOver();
	  mobileMenuController();
	  sortProjectGridList();
	  Grid.init();
	}
	
	/*function createAnimatedBackground() {
	  if(!jQuery('.code-snippets-section-background-image-area').hasClass('blur')){
    	jQuery('.code-snippets-section-background-image-area').interactive_bg({
       strength: 25,
       scale: 1.05,
       animationSpeed: "100ms",
       contain: true,
       wrapContent: false
     });
    }
	}*/
	

	function createBlurBackgroundOnScroll() {
	  code.heroBackgroundImage = jQuery('.scrollable-header-section-background-image');
	  code.heroBlurredBackgroundImage = jQuery('.scrollable-header-section-blurred-background-image'); 
	  code.heroGraphicImage = jQuery('.scrollable-header-content-area-inner-wrap');  
	  code.mainHeader = jQuery('.code-snippets-section'); 
	  code.bottomOfMainHeader =  code.mainHeader.position().top + code.mainHeader.outerHeight(true);
	  code.headerLogo = jQuery('.header-logo-link');
	  code.headerCondensedLogo = jQuery('.header-condensed-logo-link'); 
	  code.topOfHeaderSetionInnerWrap = 30;
	  code.isImageBlurred = false;
	  code.isHeightSet = false;
	  
  	jQuery(window).scroll(function(){
    	var positionOfPageScroll = document.body.scrollTop; 
    	var positionOfElementBottom =  code.heroBackgroundImage.position().top +  code.heroBackgroundImage.outerHeight(true);
    
      if(code.isHeightSet == false && positionOfPageScroll >= code.topOfHeaderSetionInnerWrap) {
    	  fixNavigationBar();
      } else if (code.isHeightSet == true && positionOfPageScroll < code.topOfHeaderSetionInnerWrap) {
        unfixNavigationBar();
      }
    	
    	if( positionOfPageScroll >= positionOfElementBottom / 5 && code.isImageBlurred == false ) {
        code.heroBackgroundImage.addClass('blur');
      	code.heroBlurredBackgroundImage.removeClass('hidden');
      	fadeOutInGraphic();
      	code.isImageBlurred = true;
    	} else if (positionOfPageScroll < positionOfElementBottom / 6 && code.isImageBlurred == true) {
        code.heroBackgroundImage.removeClass('blur');
      	code.heroBlurredBackgroundImage.addClass('hidden');
      	setTimeout(fadeOutInGraphic, 600);
      	code.isImageBlurred = false;
    	} else {
      	return;
    	}
  	});
	}
	
	function fixNavigationBar () {
	  jQuery('.main-header-section-inner-wrap').addClass('fixed');
	  code.isHeightSet == true;
	}
	
	function unfixNavigationBar () {
  	jQuery('.main-header-section-inner-wrap').removeClass('fixed');
  	code.isHeightSet == false;
	}
	
	/*function setHeightOfMainHeader (scrollPosition) {
  	var heightOfDesiredHeader = 60;
  	var whereToStopScroll = code.bottomOfMainHeader - heightOfDesiredHeader;
  	var scrollMinusHeightOfMainHeader = code.bottomOfMainHeader - scrollPosition; 
  	var difference = code.bottomOfMainHeader -  scrollMinusHeightOfMainHeader;
  	
  	if(whereToStopScroll < scrollPosition && code.isHeightSet == false) {
    	code.mainHeader.css('top', "-" + whereToStopScroll + "px" );
    	code.mainHeader.addClass('fixed');
    	code.headerLogo.addClass('hidden');
    	code.headerCondensedLogo.removeClass('hidden');
  	} else if (scrollPosition == 0 && code.mainHeader.hasClass('fixed')) {
    	code.mainHeader.css('height', code.bottomOfMainHeader + "px" );
    	code.mainHeader.css('top', "0px" );
    	code.mainHeader.removeClass('fixed');
    	
    	code.headerLogo.removeClass('hidden');
    	code.headerCondensedLogo.addClass('hidden');
  	} 
	}*/
	
	function fadeOutInGraphic() {
  	if(!code.heroGraphicImage.hasClass('blur')){
    	code.heroGraphicImage.addClass('blur');
  	} else {
    	code.heroGraphicImage.removeClass('blur');
  	}
	}
	
	function mobileMenuController () {
	  code.pageBody = jQuery('.page-body');
    code.mainNavigation = jQuery('.main-navigaiton');
  	jQuery('.main-header-mobile-menu-button').click(openMobileMenu); 
  	jQuery('.main-header-mobile-menu-close-button').click(closeMobileMenu); 
	}
	
	function openMobileMenu () {
  	if(!code.pageBody.hasClass('menu-open')) {
    	code.pageBody.addClass('menu-open');
    	code.mainNavigation.addClass('menu-open');
  	}
	}
	
	function closeMobileMenu () {
  	if(code.pageBody.hasClass('menu-open')) {
    	code.pageBody.removeClass('menu-open');
    	code.mainNavigation.removeClass('menu-open');
  	}
	}
	
	function sortProjectGridList() {
  	jQuery('.project-section-button').click(runSortProjectGridList);
	}
	
	function runSortProjectGridList (event) {
  	var buttonDataAttribute = getDataValueFromButton(event);
  	
  	if(buttonDataAttribute == "all") {
    	if(jQuery('.project-section-grid-list').children().hasClass('hidden')) {
      	jQuery('.project-section-grid-list').children().removeClass('hidden');
    	}
  	}else {
    	jQuery('.project-section-grid-list').children().addClass('hidden');
    	jQuery('.project-section-grid-list').children('[data-value="' + buttonDataAttribute +'"]').removeClass('hidden');
  	}
	}
	
	function getDataValueFromButton (event) {
  	var currentButton = event.target; 
  	var buttonDataAttribute = event.target.getAttribute('data-value');
    return buttonDataAttribute; 
	}
	
	jQuery( jQuery.proxy( _onReady, codeSnippets ) );

}();

var WebFontConfig;

WebFontConfig = {
  google: {
    families: ['Lato:300,400,700,900,300italic,400italic:latin']
  },
  typekit: { id: 'xuo1rkm' }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();