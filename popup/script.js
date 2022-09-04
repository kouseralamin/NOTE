"use strict";

window.document.body.getElementsByTagName("textarea")[0].value = window.localStorage.getItem("NOTE");

window.addEventListener("storage", function (value) {
    if (value.key === "NOTE" && window.document.body.getElementsByTagName("textarea")[0].value != window.localStorage.getItem("NOTE")) {
        window.document.body.getElementsByTagName("textarea")[0].value = window.localStorage.getItem("NOTE");
    }
}, false);

window.document.body.getElementsByTagName("textarea")[0].addEventListener("input", function (_) {
    window.localStorage.setItem("NOTE", window.document.body.getElementsByTagName("textarea")[0].value);
});