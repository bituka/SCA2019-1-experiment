// @module TestVendor.TestExtension.AdditionalCoolModule
define('TestVendor.TestExtension.AdditionalCoolModule.View'
,	[
		'testvendor_testextension_additionalcoolmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		testvendor_testextension_additionalcoolmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TestVendor.TestExtension.AdditionalCoolModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: testvendor_testextension_additionalcoolmodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/AdditionalCoolModule.Service.ss'));

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

		//@method getContext @return TestVendor.TestExtension.AdditionalCoolModule.View.Context
	,	getContext: function getContext()
		{
			//@class TestVendor.TestExtension.AdditionalCoolModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});