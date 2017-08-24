$(document).ready(function() {



    //header menu active
    $('.navigation li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.navigation li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.services-tabs li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.services-tabs li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });


    $('.services-slider').bxSlider({
        infiniteLoop: true,
        adaptiveHeight: true,
    });



    $('.phone').mask("+7(999) 999-99-99");
    $('.people').mask("-(999)-");
    $(".date").mask("99.99.9999", {placeholder: "дд.мм.гггг" });


        var slider = $('.kitchen-slider').bxSlider({
            onSlideBefore: function($slideElement){
                $('.kitchen-slider li').removeClass('active');
                $('.kitchen-slider li').removeClass('preved');
                $('.kitchen-slider li').removeClass('nexted');
                $slideElement.next().addClass('active');
                $slideElement.removeClass('active');
                $slideElement.removeClass('nexted');
            },
            onSlideAfter: function($slideElement){
                $slideElement.next().next().addClass('nexted');
                $slideElement.addClass('preved');
            },
            minSlides: 3,
            adaptiveHeight: true,
            maxSlides: 3,
            slideMargin: 0,
            moveSlides: 1,
            slideWidth: 630,
            //infiniteLoop: false,
            pager:false,
            // nextSelector: '#next-custom',
            // prevSelector: '#prev-custom'
        });
        slider.goToSlide(1);
        $(".kitchen-slider").on("click", ".preved", function(event){
            slider.goToPrevSlide();
        });
        $(".kitchen-slider").on("click", ".nexted", function(event){
            slider.goToNextSlide();
        });

    $('.table-slider').flickity({
        // options
        wrapAround: true,
        cellAlign: 'center',
        pageDots: false,
        groupCells: 1,
        imagesLoaded: true

    });
    var $carousel = $('.table-slider').flickity();

    var $progressBar = $('.progress-bar');

    $carousel.on( 'scroll.flickity', function( event, progress ) {
        progress = Math.max( 0, Math.min( 1, progress ) );
        $progressBar.width( progress * 100 + '%' );
    });


});

