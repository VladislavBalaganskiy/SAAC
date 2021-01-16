$(function() {
    

    /*ARROW TOP*/
    let arrowTop = $("#arrowTop");
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            arrowTop.addClass("active");
        } else {
            arrowTop.removeClass("active");
        }
    });



    /*SCROLL DOWN*/
    $('#scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.about').offset().top }, 'slow');
      return false;
    });
    ScrollReveal().reveal('.htmlclass',{ delay: 400 })



    $('#arrowTop').click (function() {
      $('html, body').animate({scrollTop: $('#intro').offset().top }, 'slow');
      return false;
    });
    ScrollReveal().reveal('.htmlclass',{ delay: 400 })


    /*BURGER*/
    let menuOpen = false;
    let burger = $('#burger');
    let burgerMenu = $('#burgerMenu');
    $('#burger').click (function() {
        if (!menuOpen) {
            burger.addClass("open");
            burgerMenu.addClass("open");
            menuOpen = true;
        } else {
            burger.removeClass("open");
            burgerMenu.removeClass("open");
            menuOpen = false;
        } 
      });


    /*SCROLL*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
    
        burger.removeClass("open");
        burgerMenu.removeClass("open");
        menuOpen = false;
    
    
        $("html, body").animate({
          scrollTop: elementOffset
        }, 700);
    });
});