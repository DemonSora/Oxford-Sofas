// Hide search when Nav Toggle is pressed on small screen
$("#navToggle").click(function () {
    $("#searchBar").toggleClass("d-flex");
    $("#searchBar").toggleClass("d-none");
})

// In case of search bar being hidden while resizing back to large screen
$(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth >= 576 && windowWidth < 768 && $("#navbarContent").hasClass("collapse show")) {
        $("#searchBar").removeClass("d-flex");
        $("#searchBar").addClass("d-none");
    }
    else if ($("#searchBar").hasClass("d-none")) {
        $("#searchBar").addClass("d-flex");
        $("#searchBar").removeClass("d-none");
    }
    else { }
})