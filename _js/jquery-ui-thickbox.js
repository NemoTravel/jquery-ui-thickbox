// Thickbox realization
$.widget('ui.thickbox', $.extend({}, $.ui.dialog.prototype, {
    url:undefined,
    ajaxLoad:true,
    data:[],
    onLoad:function (data, status) {
        if (data != "") {
            $(data).appendTo(this.element)
        }
    },
    onLoadError:function (e) {
        console.log('Error: can\'t load data via AJAX:', e);
    },
    ajaxMethod:'POST',
    widgetEventPrefix:'thickbox',

    _init:function () {
        this.element.data('dialog', this.element.data('thickbox'));
        return $.ui.dialog.prototype._init.apply(this, arguments);
    },
    _create:function () {
        $.ui.dialog.prototype._create.apply(this, arguments);
        if (this.options.url !== undefined) {
            if (this.options.ajaxLoad == true) {
                $.ajax({
                    url:this.options.url,
                    type:(this.options.ajaxMethod.toUpperCase() === 'POST' || this.options.ajaxMethod.toUpperCase() === 'GET') ? this.options.ajaxMethod : 'POST', //если название метода недопустимое/неправильное то по умолчанию ставится метод POST
                    data:($.isArray(this.options.data)) ? (this.options.data) : [],   //если данные которые нужно отправить на сервер не являются массивом, то отправляется пустой массив
                    success:jQuery.proxy(this.onLoad, this),
                    error:jQuery.proxy(this.onLoadError, this)
                });
            }
            else {
                $('<iframe class="thickbox_iframe" src="' + this.options.url + '"></iframe>').appendTo(this.element);
            }
        }

    }

}));
$.ui.thickbox.defaults = $.extend({}, $.ui.dialog.defaults);