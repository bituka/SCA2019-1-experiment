define('TVendor.CopyLineItem.CopyLineItem.View'
, [
    'Backbone'
  , 'underscore'
  , 'tvendor_copyLineItem_copyLineItem.tpl'
  , 'LiveOrder.Model'
  ]
, function
  (
    Backbone
  , _
  , tvendor_copyLineItem_copyLineItem_tpl
  , LiveOrderModel
  )
{
  'use strict';

  return Backbone.View.extend({
    template: tvendor_copyLineItem_copyLineItem_tpl

  , initialize: function initialize ()
    {
      this.application = this.options.container;
      this.Cart = this.application.getComponent('Cart');
    }

  , events:
    {
      'click [data-action="copy-item"]': 'copyLine' // when the button is clicked, it will begin the process
     //   "click .copy-item": "copyLine" 
    }
  , copyLine: function copyLine ()
    {
      console.log('click handled');

      this.Cart.addLine({
        line: {
            quantity: 1,
            item: {
                internalid: 43
            }
        }
      });  

     // var self = this;

      //self.showContent();

     // self.showError(_.translate('Please do not add more than 100 items to your cart'))

    }

  
  , addLines: function addLines (lines)
    {
      this.Cart.addLine({
          line: {
              quantity: 1,
              item: {
                  internalid: 43
              }
          }
      }) 
    }


  , getContext: function ()
    {
        return {
            message: 'Hello world!'
          }
    }

  })
});

console.log('View Loaded');