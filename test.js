var xmlhttp, xmlDoc;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "export_full.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

//1st task

function getAmountOfItems(){
    return xmlDoc.getElementsByTagName("items")[0]
        .getElementsByTagName("item").length 
}


//2nd task

function getNamesOfItems(){
    return Array.from(xmlDoc.getElementsByTagName("items")[0]
        .getElementsByTagName("item"))
        .map(el => el.attributes.name.nodeValue)
}

//3rd task

function getListOfParts(){
    return Array.from(xmlDoc.getElementsByTagName("items")[0]
        .getElementsByTagName("item"))
        .map(el => Array.from(el.children)
        .find(e=>e.localName == 'parts') ? 
        {
            name: el.attributes.name.nodeValue , parts: Array.from(Array.from(el.children)
            .find(e=>e.localName == 'parts').getElementsByTagName("item"))
            .map(item => item.attributes.name.nodeValue)
        } : 
        `${el.attributes.name.nodeValue} havent parts`)
}

//110th element has parts