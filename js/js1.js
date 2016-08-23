/**
 * Created by Alex.W on 2016/8/13.
 */
$(function() {


    $('#registerOption').click(function() {
        $('.optionalBtn').toggle(this.checked);
    });

    if($(window).innerWidth() <= 640) {
        $('.email, .creditNum').addClass("reverser");
    }

    $(".number input").keypress(function() {
        if(this.value.length > 3) {
            return false;
        }
    });

    $(".phoneNum input").keypress(function() {
        if(this.value.length > 9) {
            return false;
        }
    });

    $('.submitBtn').on('click',function() {
        var num = $('.phoneNum input').val();
        var title = $('.phoneNum p');
        if( num == "") {
            $('.help-block').css('visibility','visible');
            title.css('color','red');
        } else {
            $('.help-block').css('visibility','hidden');
            title.css('color','#444444');
        }
        return false;
    });

});