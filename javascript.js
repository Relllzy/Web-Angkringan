
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})


$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
 
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav angkringan1-removebg-preview").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav angkringan1-removebg-preview").show();
        }
    })
});