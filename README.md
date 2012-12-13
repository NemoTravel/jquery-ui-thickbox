jquery-ui-thickbox
==================
##  Реализация thickbox на основе dialog Jquery UI

### thickbox может принимать такие параметры:
* **url:**
         Адрес странички которая будет подгружаться;

* **ajaxLoad:** Определяет каким образом будет подгружаться страница (true - через ajax; false - через iframe);

* **modal:** (true/false) :
Eсли задано значение modal: true, то ограничивается доступ к остальному содержимому сайта. 
Цвет фона затемнения и opacity можно задать в style.css изменив соответственные значения в классе .ui-widget-overlay;

* **data:** 
Отправляемые на сервер данные в  виде массива;

* **ajaxMethod:** ('POST'/'GET') Метод передачи данных. По умолчанию 'POST'.

### Пример:
```
$(document).ready(function () {
    $('.dialog-content').thickbox({
        url:"http://api.jquery.com/jQuery.ajax/",
        ajaxLoad:false,
        modal:false,
        data:[],
        ajaxMethod:'POST'
    });
});
```
