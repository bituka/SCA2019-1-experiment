define('TVendor.CopyLineItem.CopyLineItem', 
[
	'TVendor.CopyLineItem.CopyLineItem.View'
//,	'Quick.Order'
]
,   function 
( 
	TVendor_CopyLineItem_CopyLineItem_View 
//,	QuickOrder	
)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// alert('Hello World I\'m an Extension!!');


			var Cart = container.getComponent('Cart');

			

			console.log(Cart);
			/*
			if(Cart)
			{
				Cart.addChildView('QuickOrder', function myViewConstructor()
				{
					return new TVendor_CopyLineItem_CopyLineItem_View();
				});
			}
						//console.log('TVendor_CopyLineItem_CopyLineItem_View');
			//console.log(TVendor_CopyLineItem_CopyLineItem_View);
			*/

			Cart.addChildView('Item.Actions.View', function ()
			{
				
				return new TVendor_CopyLineItem_CopyLineItem_View
				({
				container: container
				});
			})
			
		}
	}
	// console.log('end of app');
});

console.log('end of app');