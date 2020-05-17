
define(
	'Kodella.KDLHomepageCatalog.KDLHomepageCatalog'
,   [
		'Kodella.KDLHomepageCatalog.KDLHomepageCatalog.View'
	,	'Kodella.KDLHomepageCatalog.KDLHomePageCatlogCCT'
	]
,   function (
		KDLHomepageCatalogView
	,	KodellaKDLHomepageCatalogKDLHomePageCatlogCCT
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			console.log('KodellaKDLHomepageCatalogKDLHomePageCatlogCCT', {KodellaKDLHomepageCatalogKDLHomePageCatlogCCT});
			
			KodellaKDLHomepageCatalogKDLHomePageCatlogCCT.mountToApp(container);

			console.log('contaner', container);

			

			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new KDLHomepageCatalogView({ container: container });
				});
			}
		}
	};
});
