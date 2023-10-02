function key_pressed(event, item) {
    if (event.key == "Enter")
    {
        document.getElementById("q").innerHTML = "Car";
    }
}

function test(event, item) {
    alert('You pressed the button!');
}

function getTranslations() {
    const fs = require('fs')
    fs.readFile("nouns_en-fi.txt")
}