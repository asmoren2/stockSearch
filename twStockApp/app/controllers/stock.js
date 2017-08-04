import Ember from 'ember';


export default Ember.Controller.extend({
  //Declare an action for our search method.
  actions: {
   search() {
     // Model won't seem to load. so improvised by grabbing the user
     // entered symbol and routed that to a new url with the stock information.
     this.transitionToRoute('stock', this.get('symbol'));
     window.location.reload(true);
     // let stocks = this.get('model.stock');
     // console.log(stocks);

    // console.log(plan.findRecord('stock',this.get('symbol')));
    // console.log(this.get('store').findAll('stock'));

   }
 }
});
