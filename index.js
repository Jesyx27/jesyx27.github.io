function key_pressed(event, item) {
    if (event.key == "Enter")
    {
        document.getElementById("q").innerHTML = "Car";
    }
}

function test(event, item) {
    document.getElementById("q").innerHTML = "1";
    const fs = require('fs')
    document.getElementById("q").innerHTML = "2";
    fs.readFile("nouns_en-fi.txt", (err, inputD) => {
        if (err) throw err;
        document.getElementById("q").innerHTML = inputD.toString();
    })
}