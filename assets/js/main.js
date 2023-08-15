$(function () {
    // show and hide close button for menu
    // $(".navbar-toggler").click(function () {
    //     var menu_icon = $(".menu-icon").hasClass("fa-bars");
    //     if (menu_icon) {
    //         $(".menu-icon").removeClass("fa-bars").addClass("fa-xmark")
    //     } else {
    //         $(".menu-icon").removeClass("fa-xmark").addClass("fa-bars")
    //     }
    // });

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }


        $(".filter-button").removeClass("active");
        $(".filter-button").css("background-color", "");
        if ($(".filter-button").hasClass("active")) {
            $(this).removeClass("active");
            $(this).css("background-color", "");

        } else {
            $(this).addClass("active");
            $(this).css("background-color", "#216869");
        }


    });

    $(".portfolio").click(function () {
        var filter = $(this).attr('filter');
        console.log(filter);

        // if( filter == "")

        // $(".modal-content").load("kmi-recruitment.html");
        $('.modal-body').load(filter + ".html");
        $('#modal-portfolio').modal("show");
        // $('.modal-body').load('../kmi-recruitment.html',function(){
        //     $('#modal-portfolio').modal({show:true});
        // });

    });

    $("#switch").prop("checked", false);
    $("body").css("background-image", "url(/assets/images/paper1.jpg)");
    $("#switch").on("click", function () {
        if ($("body").hasClass("bg-dark")) {
            $("body").removeClass("bg-dark");
            $("i").removeClass("icon-white");
            $("p").removeClass("secondary-color");
            $("span").removeClass("secondary-color");
            $(".highlight-link").css("color", "");
            $(".title").removeClass("secondary-color");
            // $(".profile-pic").css("border-color", "#1F2421");
            // $(".profile-pic").hover(function () {
            //     $(this).css("background-color", "#49A078")11;
            // }, function () {
            //     $(this).css("background-color", "#1F2421");
            // });
            $(".job").css("color", "#1F2421");
            $(".filter-button").css("color", "");
            $(".modal-content").css("background-image", "url(/assets/images/paper1.jpg)");
            $(".btn-close").removeClass("btn-close-white");
            $(".to-top-d").css("color", "#1F2421");
            $("body").css("background-image", "url(/assets/images/paper1.jpg)");
            // $(".img-portfolio").css("box-shadow", "#f8f8f8"); 
        } else {
            $("body").addClass("bg-dark");
            $("i").addClass("icon-white");
            $("p").addClass("secondary-color");
            $("span").addClass("secondary-color");
            $(".highlight-link").css("color", "#f8f8f8");
            $(".title").addClass("secondary-color");
            // $(".profile-pic").css("border-color", "#f8f8f8");
            // $(".profile-pic").hover(function () {
            //     $(this).css("background-color", "#49A078");
            // }, function () {
            //     $(this).css("background-color", "#f8f8f8");
            // });

            $(".job").css("color", "#f8f8f8");
            $(".filter-button").css("color", "#f8f8f8");
            $(".modal-content").css("background-image", "url(/assets/images/black-paper2.jpg)");
            $(".btn-close").addClass("btn-close-white");
            $(".to-top-d").css("color", "#f8f8f8");
            $("body").css("background-image", "url(/assets/images/black-paper2.jpg)");
            // $(".img-portfolio").css("box-shadow", "#f8f8f8"); 

            // $(".modal-body").on("load", function(){
            //     alert(tes);
            // });
        }

    });
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".to-top").fadeIn();
        } else {
            $(".to-top").fadeOut();
        }
    });

    $(".to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    AOS.init();
});




