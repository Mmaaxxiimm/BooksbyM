/* ----------------- */
/* Sticky Navigation */

/*The line below will store the navbar div in the navbar variable*/
let navbar = $(".navbar");

/*We'll create a scroll event on window. Behind scroll, inside the parenthesis, we'll specify a handle function*/
$(window).scroll(function() {
    /*We use the 2 lines below to print the position of the window to the console, so we can see at which position we want the menu to appear*/
    /*First part to get the position:*/
    /*console.log(window.innerHeight);
    console.log($(".section-2").offset().top);*/
    /*Second part to get the position: if the scrollTop is greater than the oTop, then I'll add the sticky class, but if it's not the case, than I'll remove the sticky navigation. We'll use this 'sticky' class in the style.css-file*/
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop){
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});

/* ----------------- */
/* COUNTER ANIMATION */

let nCount = function(selector) {
    $(selector).each(function() {
        
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function(value){
                $(this).text(Math.ceil(value));
            }
        })
        
    });
}

let a=0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a===0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect >h1")
    }
})




































