// Thickbox realization will be added here
$.widget('ui.thickbox', $.extend({}, $.ui.dialog.prototype, {
    url:'',
    ajaxLoad:true,
    widgetEventPrefix:'thickbox',
    _init:function () {
        this.element.data('dialog', this.element.data('thickbox'));
        return $.ui.dialog.prototype._init.apply(this, arguments);
    },
    _create:function () {
        $.ui.dialog.prototype._create.apply(this, arguments);
        // TODO: по указанным кейсам реслизовать вставку кастомного контента через штуку, указанную ниже
        if (this.options.url != '') {
            if (this.options.ajaxLoad == true) {
                var current_element = this.element;
                $.ajax({
                    url:this.options.url,
                    success:function (data) {
                        if(data!=""){
                            $(data).appendTo(current_element);
                        }
                    },
                    error: function(e){
                        console.log('Error: can\'t load data via AJAX:', e);
                    }
                })
            }
            else {
                $('<iframe src="' + this.options.url + '"></iframe>').appendTo(this.element);
            }
        }
    }
}));
$.ui.thickbox.defaults = $.extend({}, $.ui.dialog.defaults);