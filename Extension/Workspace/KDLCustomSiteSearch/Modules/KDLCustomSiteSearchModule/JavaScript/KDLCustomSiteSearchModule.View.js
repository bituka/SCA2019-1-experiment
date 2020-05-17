// @module Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule
define('Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View'
,	[
		'kodella_kdlcustomsitesearch_kdlcustomsitesearchmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'SiteSearch.View'
	]
,	function (
		kodella_kdlcustomsitesearch_kdlcustomsitesearchmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,	SiteSearchView
	)
{
	'use strict';
	console.log('SiteSearchView');
	console.log(SiteSearchView);
/*
	return SiteSearchView.extend({

		template: kodella_kdlcustomsitesearch_kdlcustomsitesearchmodule_tpl

	 	,	initialize: function (options) {
			
					
					this.message = '';
					
			}

		,	getContext: function getContext()
		{
			//@class Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}

	}); */

	
	_.extend(SiteSearchView.prototype, {

		template: kodella_kdlcustomsitesearch_kdlcustomsitesearchmodule_tpl
		
	});





	// a@class Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View @extends Backbone.View
	/* return Backbone.View.extend({

		template: kodella_kdlcustomsitesearch_kdlcustomsitesearchmodule_tpl

	,	initialize: function (options) {
 */
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			// this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/KDLCustomSiteSearchModule.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
	/* 	}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		} */

		//@method getContext @return Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View.Context
	/* ,	getContext: function getContext()
		{
			//@class Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	}); */
});