import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	// Create a namespace for our REST service tell it to look for localhost:4500
	namespace: 'api',
	host: 'http://localhost:4500'

});
