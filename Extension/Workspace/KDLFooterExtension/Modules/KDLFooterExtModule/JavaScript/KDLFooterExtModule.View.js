// @module Kodella.KDLFooterExtension.KDLFooterExtModule
define('Kodella.KDLFooterExtension.KDLFooterExtModule.View'
,	[
		'kodella_kdlfooterextension_kdlfooterextmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'Footer.View'
	,	'SC.Configuration'
	]
,	function (
		kodella_kdlfooterextension_kdlfooterextmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,	FooterView
	,	Configuration
	)
{
	'use strict';

	_.extend(FooterView.prototype, {

		getContext: function ()
		{
			console.log('Configuration', Configuration);
			var footerNavigationLinks = Configuration.get('footer.navigationLinks', [])
			,	isweAccept = Configuration.get('kdlfooterlinks.weAccept.isEnabled')
			,	isSecureAndPrivate = Configuration.get('kdlfooterlinks.isSecureAndPrivate.isEnabled')
			,	copyright = Configuration.get('kdlfooterlinks.Copyright')
			,	kdlfooterNavlinks = Configuration.get('kdlfooterlinks.NavLinks', [])
			,	kdlfooterSociallinks = Configuration.get('kdlfooterlinks.SocialLinks', []);

			// @class Footer.View.Context
			return {

				isweAccept: isweAccept
			,	isSecureAndPrivate: isSecureAndPrivate
			,	copyright: copyright
			,	showkdlfooterNavlinks: !!kdlfooterNavlinks.length
			,	kdlfooterNavlinks: kdlfooterNavlinks
			,	showkdlfooterSociallinks: !!kdlfooterSociallinks.length
			,	kdlfooterSociallinks: kdlfooterSociallinks

				// @property {Boolean} showLanguages
			,	showFooterNavigationLinks: !!footerNavigationLinks.length
				// @property {Array<Object>} footerNavigationLinks - the object contains the properties name:String, href:String
			,	footerNavigationLinks: footerNavigationLinks
			};
			// @class Footer.View
		}
		
	});
});