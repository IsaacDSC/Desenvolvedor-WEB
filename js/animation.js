$(document).ready(function() {
    $("#logo-tipo ").on("mouseover ", function() {

        $("section h1 ").addClass("efeito ");
        $("section h2 ").addClass("seg_efeito ");

    });
    $("#logo-tipo ").on("mouseout ", function() {

        $("section h1 ").removeClass("efeito ");
        $("section h2 ").removeClass("seg_efeito ")
    });
    $("#input-search ").on("focus ", function() {

        $("form input ").addClass("input_ativo ");
        $("form button ").addClass("conf_button ");
    });
    $("#input-search ").on("focusout ", function() {

        $("form input ").removeClass("input_ativo ");
        $("form button ").removeClass("conf_button ");
    });
    $("section #one ").on("mouseover ", function() {

        $(".date-1 p ").addClass("edition_date1 ");
    });
    $("section #one ").on("mouseout ", function() {

        $(".date-1 p ").removeClass("edition_date1 ");
    });



});