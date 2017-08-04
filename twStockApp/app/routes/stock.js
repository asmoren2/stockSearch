import Ember from 'ember';

export default Ember.Route.extend({
  // Retrieves stock info.
  // Note: Model would not load correctly
  model: function(params) {
    console.log(params.stock_id);
         return console.log(this.store.findRecord('stock', params.stock_id));
       },

       setupController: function(controller, model) {
    controller.set('model', model);
  }
  // setupController: function(params){
  //   this.controllerFor('stock').set('model',this.store.query('stock', {filter: {id: params.stock_id}}).then(function(result){
  //     return console.log(result.get('name'));
  //   }));
  // }
// model: function(params) {
//     return this.store.findRecord('stock', params.stock_id).then(function(user) {
//     let symbol = user.get('symbol');
//     let name = user.get('name');
//     console.log(`Currently logged in as ${name} ${symbol}`);
//   });
// //}
// setupController(controller, model) {
//   this.set('navigation', Ember.get(model, 'navigation'));
// }
});
