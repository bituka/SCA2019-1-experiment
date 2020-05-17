define(
    'KDNavMenu',
    [
        'KDNavMenu.View',
        'underscore'
    ], function(
        KDNavMenuView,
        _
    ) {
        'use strict';

        return  {
            mountToApp: function mountToApp (container)
            {
                var layout = container.getComponent('Layout');
                
                if(layout)
                {
                    layout.registerView('KDNavMenuView', function() {
                        return new KDNavMenuView({ container: container });
                      });
                }
            }
        };
});