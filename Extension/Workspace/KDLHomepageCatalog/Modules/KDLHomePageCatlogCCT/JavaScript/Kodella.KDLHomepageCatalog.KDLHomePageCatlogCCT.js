// @module Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT

// An example cct that shows a message with the price, using the context data from the item

// Use: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/service.ss')) 
// to reference services or images available in your extension assets folder

define(
	'Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT'
,   [
		'Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT.View'
	]
,   function (
		KDLHomePageCatlogCCTView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			container.getComponent('CMS').registerCustomContentType({
				
				// this property value MUST be lowercase
				id: 'kdl_hpg_catalog'
				
				// The view to render the CCT
			,	view: KDLHomePageCatlogCCTView
			,  options: {
				container: container
			}
			});
		}
	};
});