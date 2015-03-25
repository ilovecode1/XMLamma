//XMLamma.js Version 0.1.0

function XMLamma() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
       
        xmlhttp = new XMLHttpRequest();
    } else {
        
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               return xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              return "400";
           }
           else {
               return xmlhttp.status.toString;
           }
        }
    }

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
}
