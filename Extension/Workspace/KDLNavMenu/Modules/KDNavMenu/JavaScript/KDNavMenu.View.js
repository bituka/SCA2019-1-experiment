define(
    'KDNavMenu.View',
    [
        'Header.Profile.View',
        'SC.Configuration',
        'Backbone',
        'Backbone.FormView',
        'jQuery',
        'underscore',
        'kd_navmenu.tpl'
    ], function (
        HeaderProfileView,
        Configuration,
        Backbone,
        BackboneFormView,
        jQuery,
        _,

        kd_navmenu_tpl
    ) {
        'use strict';
        
        return Backbone.View.extend({
            template: kd_navmenu_tpl,
            
            getContext: function () {
                var navLinks = Configuration.get('mainNav.extension.navigationColumn');
                var showNavLinks = navLinks.length > 0 ? true : false;
                var payPodisplayText = Configuration.get('payPo.displayText');
                var payPoUrl = Configuration.get('payPo.Url');

                // console.log('test po test', {1: payPodisplayText});
                
                /*  console.log('Test showNavLinks', {
                    1: showNavLinks,
                    2: navLinks
                });  */
                
			return {
				showNavLinks: showNavLinks,
                navLinks: navLinks,
                payPodisplayText:payPodisplayText,
                payPoUrl:payPoUrl
			};
            }
        })
    });