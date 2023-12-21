let degree = 0;
function rotateLogo() {
    let logoImage = $("#logo-rotated");
    logoImage.css("transition", "transform 1s ease-in-out");

    degree += 360;
    logoImage.css("transform", `rotate(${degree}deg)`);
}

$("#logo-rotated").on("click", function() {
    rotateLogo();
});
