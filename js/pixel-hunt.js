if (!window.jQuery) {
    var phJq = document.createElement("script");
    phJq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
    document.getElementsByTagName("head")[0].appendChild(phJq);
}
var phOverlaySrc = prompt("Введите адрес макета");
$("body").append("<div id='mockup-overlay'></div>");
$("#mockup-overlay").css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: $(document).height(),
    background: "url(" + phOverlaySrc + ") no-repeat 0 0",
    zIndex: 9999,
    opacity: 0.5
});
