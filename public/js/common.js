$(document).ready(function() {
    $(".added_friend").hide();
    $('.intersting').hide();
});

function move_tap(tab, content) {
    $(tab).click(function() {
        $('.tap_content').hide();
        $(content).show();
        $('.tap').removeAttr('style');
        $(this).css('color', 'white');
    })
};

var taps = ['.history', '.friend', '.interested']
var contents = ['.chat_history', '.added_friend', '.intersting'];


for (var i = 0; i <= 3; i++) {
    move_tap(taps[i], contents[i]);
};