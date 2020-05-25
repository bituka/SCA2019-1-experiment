// @module Garry.TestimonialExtension.TestimonialModule
define('Garry.TestimonialExtension.TestimonialModule.View'
,	[
		'garry_testimonialextension_testimonialmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		garry_testimonialextension_testimonialmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Garry.TestimonialExtension.TestimonialModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: garry_testimonialextension_testimonialmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/TestimonialModule.Service.ss'));

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

		//@method getContext @return Garry.TestimonialExtension.TestimonialModule.View.Context
	,	getContext: function getContext()
		{
			//@class Garry.TestimonialExtension.TestimonialModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});