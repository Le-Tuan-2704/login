{
    var x = screen.height;
    document.getElementById("body").height = x;
    document.getElementById("body").style.backgroundColor = "while";
}

function btnEmail(){
    document.getElementById("tickEmail").style.display="block";
    document.getElementById("tickPassword").style.display="none";
}

function btnPassword(){
    document.getElementById("tickPassword").style.display="block";
    document.getElementById("tickEmail").style.display="none";
}