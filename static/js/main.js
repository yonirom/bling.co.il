$(document).ready(function() {
    var i = 0;
    var stop = 0;
    var b = setInterval(function() {
        i++;
        if (i > 37) {
            if (stop)
                clearInterval(b);
            i = 0;
            stop = 1;
        }
        $("span:nth-child(38n+" + i + ")").addClass("d");
        setTimeout(function() { $("span.d").removeClass("d"); }, 2);
    }, 20);
});
