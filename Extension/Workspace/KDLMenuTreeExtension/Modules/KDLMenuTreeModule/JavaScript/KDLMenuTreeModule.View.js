// @module Kodella.KDLMenuTreeExtension.KDLMenuTreeModule
define('Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.View'
,	[
		'kodella_kdlmenutreeextension_kdlmenutreemodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_kdlmenutreeextension_kdlmenutreemodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdlmenutreeextension_kdlmenutreemodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/KDLMenuTreeModule.Service.ss'));

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

		//@method getContext @return Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDLMenuTreeExtension.KDLMenuTreeModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});