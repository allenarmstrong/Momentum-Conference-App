$(document).bind("mobileinit", function() {
      $.mobile.page.prototype.options.addBackBtn = true;
	  $.mobile.defaultPageTransition = "none";
	  $.mobile.defaultDialogTransition = "none";
});

$(document).delegate('[data-role="page"]', 'pageinit', function () {
    if (this.id != 'page') {
        var $header = $(this).children('[data-role="header"]');
        if ($header.length) {
            $header.append($('<a />', { class : 'ui-btn-right', href : '#page' }).buttonMarkup({ icon: "home", iconpos : "notext", theme: "b" }));
        }   
    }    
});