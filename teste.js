document.getElementById("clicka").addEventListener("click", randomColor);

function randomColor () {
    var letters = "123456789ABCDEF".split('');
    var color = "#";
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("container").style.backgroundColor = color;
}