
define(
	'Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule'
,   [
		'Kodella.KDLCustomSiteSearch.KDLCustomSiteSearchModule.View'
		
	]
,   function (
		KDLCustomSiteSearchModuleView
	
	)
{
	'use strict';

	console.log('KDLCustomSiteSearchModuleView');
	console.log(KDLCustomSiteSearchModuleView);

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			console.log('layout');
			console.log(layout);

			if(layout)
			{
				/* layout.addChildView('SiteSearch', function() { 
					return new KDLCustomSiteSearchModuleView({ container: container });
				}); */
				layout.addChildViews(
					'Header.View'
					, {
						'SiteSearchView':
						{
							'SiteSearchView':
							{
								childViewConstructor: function () {
									return KDLCustomSiteSearchModuleView;
								}
							}
						}
					}
				);
			}

		}
	};
});
