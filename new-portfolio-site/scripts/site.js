/*
	@codekit-prepend "js-additions.js"
*/

window.portfolioSite = new function() {

	var portfolioSite;
	portfolioSite = this;
	code = {};

	function _onReady ( _event ) {

	}
		
	jQuery( jQuery.proxy( _onReady, portfolioSite ) );

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