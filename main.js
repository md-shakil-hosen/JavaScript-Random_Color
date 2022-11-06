function getNewColor(){
    var hexaNumber, color;
    hexaNumber = "0123456789ABCDEF";
    color = "#"
    for(var i = 0; i < 6; i++){
        color = color + hexaNumber[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.getElementById("hex").innerHTML = color;
}