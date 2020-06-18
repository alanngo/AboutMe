var i = 0;
var dir = "grad/"
var images = [];


for (var n = 0; n< 22; n++)
{
    images[n] = dir+"grad"+n+".jpg";
}

function firstImg()
{
    document.slide.src = images[0];
    console.log("first image");
}

function nextImg()
{
    if (i <images.length-1) { i++;}

    else { i =0;}
    document.slide.src = images[i];
    console.log("next img "+ i);
}

function prevImg()
{
    if (i<images.length+1 && i>0) { i--;}

    else { i =images.length-1;}
    document.slide.src = images[i];
    console.log("prev img "+ i);
}

window.onload = firstImg;