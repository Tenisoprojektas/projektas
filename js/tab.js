var activeTab = 2;
var sheetai = $('.sheet');
var tabai = $('.tab_header li a');

var keistiTab = function(elementas) {

    sheetai.hide().removeClass('active_sheet');

    tabai.removeClass('active_link');

    var sheetId = $(elementas).attr('href');

    $('[href="'+sheetId+'"]').addClass('active_link');

    $(sheetId).show().addClass('active_sheet');
};