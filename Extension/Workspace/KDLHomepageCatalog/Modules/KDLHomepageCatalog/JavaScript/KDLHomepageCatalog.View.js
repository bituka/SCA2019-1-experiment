// @module Kodella.KDLHomepageCatalog.KDLHomepageCatalog
define('Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View'
,	[
		'kodella_kdlhomepagecatalog_kdlhomepagecatalog.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_kdlhomepagecatalog_kdlhomepagecatalog_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdlhomepagecatalog_kdlhomepagecatalog_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/KDLHomepageCatalog.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View.Context
			this.message = this.message || 'Hello Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View!!'
			return {
				message: this.message
			};
		}
	});
});