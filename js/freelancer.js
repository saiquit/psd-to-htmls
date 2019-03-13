$(document).ready(function ($) {
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

});

$(function () {
    $(document).scroll( function () {
        if($(document).scrollTop() >600){
            $(".navbar").slideDown(5000, function () {
                $(this).addClass("on-scroll animated slideInDown")
            })
        }
        else {
            $(".navbar").removeClass("on-scroll")
        }
    })

    // $(window).scroll(function (event) {
    //     event.preventDefault();
    //     $('.navbar').toggleClass('on-scroll animated slideInDown', $(this).scrollTop() > 600)
    //
    // })
    // Select all links with hashes
    $('a[href*="#testi"], a[href*="#home"], a[href*="#do"], a[href*="#contact"]')

        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
        });

        $(window).scroll(function () {
            var scrollbarLocation = $(this).scrollTop();
            $()
        })





})