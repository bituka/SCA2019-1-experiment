// @module Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule
define('Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.View'
,	[
		'kodella_pdpadditionaldescription_pdpadditionaldescriptionmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_pdpadditionaldescription_pdpadditionaldescriptionmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_pdpadditionaldescription_pdpadditionaldescriptionmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/PDPAdditionalDescriptionModule.Service.ss'));

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

		//@method getContext @return Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.PDPAdditionalDescription.PDPAdditionalDescriptionModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});