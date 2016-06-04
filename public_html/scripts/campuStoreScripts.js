/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*$('#mainMenuWrapper').attr('class', '');
$('#subMenuWrapper').attr('class', 'dropdown-menu');*/

var readURL = function (input, imgId) {
    console.log("inside read");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        console.log("reader created");
        reader.onload = function (e) {
            $(imgId).attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
};


$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(this).width() <= 767) {
        if ($('.mainMenuWrapper').hasClass('main-menu') && $('.subMenuWrapper').hasClass('sub-menu')) {
            $('.mainMenuWrapper').removeClass('main-menu');
            $('.subMenuWrapper').removeClass('sub-menu');
        }
    }
    else {
        if (!$('.mainMenuWrapper').hasClass('main-menu') || !$('.subMenuWrapper').hasClass('sub-menu')) {
            $('.mainMenuWrapper').addClass('main-menu');
            $('.subMenuWrapper').addClass('sub-menu');
        }
    }
    });


    $('#mycarousel').carousel({interval:2000});
    $('#carousel-play').click(function(){
        $('#mycarousel').carousel('cycle');
    });

    $('#carousel-pause').click(function(){
        $('#mycarousel').carousel('pause');
    });

    
    
});
        
