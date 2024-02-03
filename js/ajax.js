function makeCall() {

    // create object with params
    const params = {
        param1: 'value1',
        param2: 'value2',
    };

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/service.php", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.onreadystatechange = runObject;
    xhttp.send(JSON.stringify(params));
}






function runObject() {

    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
        let object = JSON.parse(this.responseText);

        let content = '';
        for (var key in object) content += key + ' ' + object[key] + ' ';

        document.getElementById("res").innerHTML = content;
    }
}


