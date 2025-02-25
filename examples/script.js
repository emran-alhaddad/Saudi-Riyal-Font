document.addEventListener("DOMContentLoaded", function () {
    const fontSizeSlider = document.getElementById("fontSizeSlider");
    const fontSizeValue = document.getElementById("fontSizeValue");
    const dynamicText = document.querySelector(".dynamic-text");
    const colorPicker = document.getElementById("colorPicker");

    // Change font size dynamically
    fontSizeSlider.addEventListener("input", function () {
        const newSize = fontSizeSlider.value + "px";
        fontSizeValue.innerText = newSize;
        dynamicText.style.fontSize = newSize;
    });

    // Change color dynamically
    colorPicker.addEventListener("input", function () {
        document.documentElement.style.setProperty("--riyals-color", colorPicker.value);
    });
});

// Toggle Super/Subscript
function toggleSuperSub(type) {
    let el = document.getElementById("superSub");
    if (type === "super") {
        el.style.verticalAlign = "super";
        el.style.fontSize = "0.7em"; /* Smaller than normal text */
    } else {
        el.style.verticalAlign = "sub";
        el.style.fontSize = "0.7em"; /* Smaller than normal text */
    }
}
