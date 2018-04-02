

function checkSizeWindow(){
	if(document.documentElement.clientWidth <= 940 && 
        document.documentElement.clientWidth > document.documentElement.clientHeight){

        $('#header .sl__slide').css('height', document.documentElement.clientWidth + 'px');
    }
};

$(document).ready(function(){
    
    /*============= плaвная прокрутка к карте ===================*/

    $(".map__scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    checkSizeWindow();
    /*реализация адаптивности при горизонтально повёрнутом экране*/

    $(window).on("resize", checkSizeWindow);
});

