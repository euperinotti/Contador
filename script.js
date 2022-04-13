var num = 0;
document.querySelector("p").innerHTML = num;

function increase(){
    num += 1;
    document.querySelector("p").innerHTML = num;
    return num
}

function decrease(){
    num -= 1;
    document.querySelector("p").innerHTML = num;
    return num;
}