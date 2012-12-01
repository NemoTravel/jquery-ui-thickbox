// Thickbox realization will be added here
$.widget('ui.thickbox', $.extend({}, $.ui.dialog.prototype, {
    url: '',
    ajaxLoad: false,
    widgetEventPrefix: 'thickbox',
    _init: function() {
        this.element.data('dialog', this.element.data('thickbox'));
        return $.ui.dialog.prototype._init.apply(this, arguments);
    },
    _create: function() {
        $.ui.dialog.prototype._create.apply(this, arguments);
        // TODO: по указанным кейсам реслизовать вставку кастомного контента через штуку, указанную ниже
     // this.element.html();
    }
}));
$.ui.thickbox.defaults = $.extend({}, $.ui.dialog.defaults);