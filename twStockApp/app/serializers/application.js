import DS from 'ember-data';

// Use a serializer to map Mongo ids to something ember can read nicely
export default DS.RESTSerializer.extend({
	primaryKey: '_id',
    serializeId: function(id) {
        return id.toString();
    }
});
