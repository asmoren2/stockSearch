import DS from 'ember-data';

// Declare our stock model
export default DS.Model.extend({
    symbol: DS.attr('string'),
    name: DS.attr('string'),
    lastSale: DS.attr('string'),
    marketCap: DS.attr('string'),
    iPOyear: DS.attr('string'),
    industry: DS.attr('string')
});
