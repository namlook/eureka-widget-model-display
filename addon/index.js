import Ember from 'ember';
import WidgetModel from 'ember-eureka/widget-model';

export default WidgetModel.extend({

    displayEmptyValue: Ember.computed.alias('config.displayEmptyValue'),
    emptyPlaceholderLabel: Ember.computed.alias('config.emptyPlaceholderLabel'),

    /** display only the fields specified in `config.fields`
     * If `config.fields` doesn't exists, display all model's fields
     */
    fields: function() {
        var displayEmptyValue = this.get('displayEmptyValue');
        var fieldNames = this.get('config.fields');
        var fields, field;
        if (fieldNames) {
            var model = this.get('model');
            fields = Ember.A();
            fieldNames.forEach(function(fieldName) {
                field = model.get(fieldName+'Field');
                if (!displayEmptyValue && !field.get('hasValue')) {
                    return;
                }
                fields.pushObject(field);
            });
        } else {
            fields = this.get('model._fields');
        }

        return fields;
    }.property('config.fields.@each', 'model._fields'),

    label: function() {
        var _label = this.get('config.label');
        if (_label === 'auto') {
            return this.get('model.title');
        }
        return _label;
    }.property('config.label', 'model.title')

});
