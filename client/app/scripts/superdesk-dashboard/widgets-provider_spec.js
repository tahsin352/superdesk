(function() {
'use strict';


describe('widgets provider', function() {

    var WidgetsProvider = window.WidgetsProvider;

    beforeEach(module('superdesk.dashboard.widgets'));

    /*
    beforeEach(module(function($provide) {
        var provider = $provide.provider('widgets', WidgetsProvider);
        provider.widget('id', {label: 'first'});
        provider.widget('id', {label: 'second'});
    }));
    */
    var widgets;
    beforeEach(inject(function (widgets) {
        widgets.widget('id', {label: 'first'});
        widgets.widget('id', {label: 'second'});
    }));

    it('is defined', function() {
        expect(WidgetsProvider).not.toBe(undefined);
    });

    it('can register widgets', inject(function(widgets) {
        expect(widgets.length).toBe(1);
        expect(widgets[0]._id).toBe('id');
        expect(widgets[0].label).toBe('second');
    }));
});
})();
