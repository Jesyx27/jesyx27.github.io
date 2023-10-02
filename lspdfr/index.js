var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var content = document.getElementById("content")

function alarm() {
    document.getElementById("title-text").innerHTML = "New text!";
}
	
function records() {
    content.innerHTML = '<iframe src="records.html" width="100%" height="500" style="border:0px;"></iframe>'
    content.style.margin = 10;
    content.style.padding = 10;
}

function enter_record(event, item) {
    if (event.key == "Enter")
    {
        if (item.id == "person-entry")
        {   
            var vars = ['name', 'd.o.b.', 'sex', 'license', 'warrent']
            var vals = ['doe, john', '01/01/1970', 'm', 'expired', 'none']
            var htmljoiner = []
        
            document.getElementById("record-information").innerHTML = "hello";

            for (let i = 0; i < vars.length; i++) {
                htmljoiner += '<b class="var-text" style"color:red">' + vars[i] + '</b>'
                htmljoiner += '<b class="result-text">' + vals[i] + '</b>'
            }

            document.getElementById("record-information").innerHTML = htmljoiner.replace('$', ' ');
        } 
        else if (item.id == "veh-entry")
        {   


            document.getElementById("1-var").innerHTML = "Car"
            document.getElementById("2-var").innerHTML = "Car"
            document.getElementById("3-var").innerHTML = "Car"
            document.getElementById("4-var").innerHTML = "Car"

            document.getElementById("1-record").innerHTML = "Car"
            document.getElementById("2-record").innerHTML = "Car"
            document.getElementById("3-record").innerHTML = "Car"
            document.getElementById("4-record").innerHTML = "Car"
        }
        
    }
}