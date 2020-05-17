// Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCTView, this is the view your cct
// will load after dragged into the application

define('Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT.View'
,	[
		'CustomContentType.Base.View'

	,	'kodella_kdlhomepagecatalog_kdlhomepagecatlogcct.tpl'

	,	'jQuery'
	,	'underscore'
	]
,	function (
		CustomContentTypeBaseView

	,	kodella_kdlhomepagecatalog_kdlhomepagecatlogcct_tpl

	,	jQuery
	,	_
	)
{
	'use strict';

	console.log('CustomContentTypeBaseView', CustomContentTypeBaseView)

	return CustomContentTypeBaseView.extend({

		template: kodella_kdlhomepagecatalog_kdlhomepagecatlogcct_tpl

	,  initialize: function initialize (options)
		{
		if (options)
		{
			this.container = options.container;
		}

		this._initialize();
		}

		// As an example of the 'install' method, we are going to emulate a fetch to a service
		// Until the promise is resolved, you won't be able to edit the settings of this CCT
		// The same could happen with the 'update' method
	,	install: function (settings, context_data)
		{
			this._install(settings, context_data);

			// call some ajax here
			return jQuery.Deferred().resolve();
		}

	// 	// The list of contexts that you may need to run the CCT
	,	contextDataRequest: ['item']

		// By default when you drop a CCT in the SMT admin, it will run the 'validateContextDataRequest' method to check that you have
		// all the requested contexts and it will fail if some context is missing.
	,	validateContextDataRequest: function validateContextDataRequest()
		{
			return true;
		}

	,	getContext: function getContext()
		{
			{
				/* var message = 'Hello World I\'m a CCT!!';

				if (this.contextData.item)
				{
					var item = this.contextData.item()
				
				,	message = 'Special Offer!! ' + item.keyMapping_name + ' at $' + item.keyMapping_price + '.';


				} */
				console.log('this.settings', this.settings);
				var label = this.settings.custrecord_kdl_cct_label
			,	cat_url = this.settings.custrecord_kdl_cct_hpgcat_url	
			,	img_url = this.settings.custrecord_kdl_cct_hpgcat_imgurl

				return {

					label: label
				,	cat_url: cat_url		
				,	img_url: img_url	  
				};
		  
			  }
		}
	});
});