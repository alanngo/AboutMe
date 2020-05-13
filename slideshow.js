var i = 0;
var images = [];
var time = 5000;
var dir = "PC/"

/*image list*/
images[0]=dir+"first build.jpg"
images[1]=dir+"front.jpg"
images[2]=dir+"back.jpg"
images[3]=dir+"setup0.jpg"
images[4]=dir+"setup2.jpg"

function changeImg()
{
    document.slide.src = images[i];
    
    if (i <images. length - 1){i++;}
    
    else{i =0;}
    
    setTimeout("changeImg()", time);
}

window.onload = changeImg;