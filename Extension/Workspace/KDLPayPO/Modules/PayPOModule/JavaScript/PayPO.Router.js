define('PayPO.Router', [
      'Backbone'
    , 'Kodella.KDLPayPO.PayPOModule.View'
    ], 
function(
      Backbone
    , KodellaKDLPayPOPayPOModuleView

    ) {
    'use strict';       
        
    return Backbone.Router.extend({
        routes: {
        'submit_po': 'submitPOform'
        }

    ,    initialize: function (application)
        {
            this.application = application;
        }

    ,   submitPOform: function() {

            var view = new KodellaKDLPayPOPayPOModuleView({application: this.application});
            view.showContent();
        }

    });
});