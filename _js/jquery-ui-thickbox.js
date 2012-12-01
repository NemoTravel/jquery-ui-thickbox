// Thickbox realization will be added here
$.widget('ui.thickbox', $.extend({}, $.ui.dialog.prototype, {
    url: 'http://www.dejurka.ru/category/css/',
    ajaxLoad: false,
    widgetEventPrefix: 'thickbox',
    _init: function() {
        this.element.data('dialog', this.element.data('thickbox'));
        return $.ui.dialog.prototype._init.apply(this, arguments);
    },
    _create: function() {
        $.ui.dialog.prototype._create.apply(this, arguments);
        // TODO: по указанным кейсам реслизовать вставку кастомного контента через штуку, указанную ниже
      if(this.url!=''){
          if(this.ajaxLoad==true){
              $.ajax({
                  url: this.url,
                  success: function(data, status){
                      if(status=="success"){
                          alert(data);
                      }
                  }

              })
          }
          else{
                $('<iframe src="'+this.url+'"></iframe>').appendTo(this.element);
          }
      }
    }
}));
$.ui.thickbox.defaults = $.extend({}, $.ui.dialog.defaults);