// @module VendorName.TestExtension.TestModule
define('VendorName.TestExtension.TestModule.View'
,	[
		'vendorname_testextension_testmodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'SC.Configuration'
	]
,	function (
		vendorname_testextension_testmodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	,	Configuration
	)
{
	'use strict';

console.log('test modeiee view loded');

	// @class VendorName.TestExtension.TestModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: vendorname_testextension_testmodule_tpl

	,	initialize: function (options) {

			
		}


	, 	childViews: {
			
		}
		


		//@method getContext @return VendorName.TestExtension.TestModule.View.Context
	,	getContext: function getContext()
		{	
			var navLinks = Configuration.get('mainNav.extension.navigationColumn');
			var showNavLinks = navLinks.length > 0 ? true : false;
                console.log('Test contactLinks', {
                    1: showNavLinks,
                    2: navLinks
				});
				
			return {
				showNavLinks: showNavLinks,
				navLinks: navLinks
			};
			
			//@class VendorName.TestExtension.TestModule.View.Context
			//this.message = this.message || 'Hello World!!'
			//return {
			//	message: this.message
			//};
		}
	});
});


/**
{
   "type": "object",
   "modifications" : [
       {
           "target": "$",
           "action": "add",
           "value":  {
               "subtab": {
                  "id": "kdMainNavExt",
                  "title": "Kodella Main Navigation Extension",
                  "description": "Configuration for Main Links.",
                  "group": "kodellaApp"
            }
           }
       }
   ]
} 


{
   "type": "object",
   
   "subtab": {
       "id": "kdMainNavExt2",
       "title": "Kodella Top Hezzader Extension",
       "description": "Configuration for Top Header Links.",
       "group": "kodellaApp"
   }
   
}
 * 
 * 
 * 
 */