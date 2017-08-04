import Ember from 'ember';

export default Ember.Route.extend({
	// Supposed to check that user input is in database but nothing other than findAll()
	// worked.
	
	// Autocomplete search
	// queryParams: {
  //   search: {
  //     refreshModel: true
  //   }
  // },
	model: function(params) {
		//console.log(params);
		//console.log(params.search);
		//return console.log(this.store.findRecord('stock',params.search));
		if(params.search != "" || params.search != undefined){
		// return this.store.findRecord('stock', params.search).then(function(stock) {
		// 	let name = stock.get('name');
		// 	console.log(`Currently logged in as ${name}`);
		// 	if(stock.get('symbol') === params.search){
		// 	}
		return this.store.findAll('stock',params.search);
		//});
	}
	}
});
