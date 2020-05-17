// @module Kodella.ProducViewsExt.ProductViewsExtModule
define('Kodella.ProducViewsExt.ProductViewsExtModule.View'
,	[
		'kodella_producviewsext_productviewsextmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_producviewsext_productviewsextmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Kodella.ProducViewsExt.ProductViewsExtModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_producviewsext_productviewsextmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ProductViewsExtModule.Service.ss'));

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

		//@method getContext @return Kodella.ProducViewsExt.ProductViewsExtModule.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.ProducViewsExt.ProductViewsExtModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});