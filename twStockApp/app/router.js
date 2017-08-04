import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// Set up our routes
Router.map(function() {
  // create a route that takes the symbol as a parameter i.e. host.com/AAPL
  this.route('stock', { path: '/:stock_id' });
});

export default Router;
