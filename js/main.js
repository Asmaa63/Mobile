
let btn=document.getElementById("video-play-btn");
let video=document.getElementById("video-popup");
let btnclose=document.getElementById("close");

btn.onclick=function(){
    video.classList.add("open");
}
btnclose.onclick=function(){
    video.classList.remove("open");
}

$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(this).scrollTop()>90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

//   features

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // screenshots

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    // testimonials  carousel

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


    // team  carousel

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


    // page scrollit

    $.scrollIt({
        topOffset:-50
    });


    // navbar collapse

    $(".nav-link").on("click",function(){
        $(".navbar-collapse").collapse("hide")
    });



    // start toggle theme light and dark mode

    function toggleTheme(){


        if(localStorage.getItem("shala-Theme") !== null){
            if(localStorage.getItem("shala-Theme") === "dark"){
                $("body").addClass("dark")
            }
            else{
                $("body").removeClass("dark")
            }
        }


        updateIcon(); 
    }
    toggleTheme();



    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-Theme","dark");
        }
        else{
            localStorage.setItem("shala-Theme","light");
        }
        updateIcon();
    });


    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }




});

// let icon =document.getElementsByClassName("toggle-theme");
// icon.onclick=function(){
//     document.body.classList.addClass('dark');   
// }



