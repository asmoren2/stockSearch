import Ember from 'ember';

export default Ember.Controller.extend({
  //Declare an action for our search method.
  actions: {
   search() {
     // Again model won't seem to load. so improvised by grabbing the user
     // entered symbol and routed that to a new url with the stock information.
      //let stocks = this.get('model.stock');
     //console.log(stocks);
          this.transitionToRoute('stock', this.get('symbol'));
          window.location.reload(true);
   }
 }
});
