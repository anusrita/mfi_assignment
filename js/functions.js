var params = new URLSearchParams(window.location.search)
var searchParam = params.get('search')

function getUrl() {
    let url = window.location.origin + window.location.pathname + "?"

    var search = params.get('search')
    var tab = params.get('tab')

    if (search) {
        url = `${url}search=${search}&display=1&`
    }

    if (tab) {
        url = `${url}tab=${tab}&`
    }

    return url
}

function card_funtion1(num) {
    if (num === 1) {
        var x = document.getElementById("sec_2_div_1");
        if (x.style.display === "none") {
            document.getElementById("sec_2_div_1").style.display = "block";
        } else {
            document.getElementById("sec_2_div_1").style.display = "none";
        }
    }
}

function tab_funtion() {
    let search = params.get('search');
    let display = params.get('display');
    if(search && search != "" && display == "1")
        $('#search').dropdown('toggle');
}

function tooltip_load() {
    let search = params.get('search');
    let display = params.get('display');
    if(search && search != "" && display == "1")
        $('#search').dropdown('toggle');
}


   

$('.sec_buttons').click(function (e) {
    let index = $(this).data("index");
    if($("#sec_2_div_" + index).is(":hidden")){
        $(".sec_buttons").hide();
        $(this).show();
        $(".sec_divs").hide();
        $("#sec_2_div_" + index).show();
    } else {
        $(".sec_buttons").show();
        $(".sec_divs").hide();
    }
});


$(".navbar-toggler").click(function(){
    $("#collapsibleNavbar").slideToggle();
  });









