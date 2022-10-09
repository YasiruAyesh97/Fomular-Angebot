(function($) {

    

    

      




    // SMOOTH SCROLL
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    // SCROLL TO TOP BUTTON
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 800) { // If page is scrolled more than 50px
            $('.scroll-to-top').addClass('visible'); // Fade in the arrow
        } else {
            $('.scroll-to-top').removeClass('visible'); // Else fade out the arrow
        }
    });


    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("dynamicSet");
    var isShow = true
    output.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(slider.value)
    update = () => {
      output.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
      }).format(slider.value);
      // Display the default slider value
      console.log(slider.value)
    }
    let view = document.getElementById('range');
    // Update the current slider value (each time you drag the slider handle)
    //let update = () => output.innerHTML = slider.value;
    slider.addEventListener('input', update);
    


    
})(jQuery);



