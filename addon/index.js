import Ember from 'ember';
import WidgetModel from 'ember-eureka/widget-model';

export default WidgetModel.extend({

    fields: Ember.computed.alias('model._fields'),

    header: function() {
        var headerTitle = this.get('config.header');
        if (headerTitle === 'auto') {
            return this.get('model.title');
        }
        return this.get('config.header');
    }.property('config.header', 'model.title')

});
