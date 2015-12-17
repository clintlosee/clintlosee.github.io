$(function() {
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cl-top');

    // Hide-Show back-to-top link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cl-is-visible') : $back_to_top.removeClass('cl-is-visible cl-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cl-fade-out');
        }
    });

    // Smooth scroll
    $back_to_top.on('click', function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0,
            }, scroll_top_duration);
    });
});