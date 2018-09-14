var isMouseTracking = false;
function toggleTracking() {

    isMouseTracking = !isMouseTracking;

    if (isMouseTracking) {
        document.getElementById("trackingStatus")
            .innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus")
            .innerText = "NOT TRACKING";
    }
}
function updateMousePosition() {
    // If tracking is enabled, update the labels
    if (isMouseTracking) {
        // We can get the mouse positions with
        // event.clientX and event.clientY.
        // We can update the text of an HTML element with the
        // innerText property.
        var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}
