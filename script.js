var slide = document.getElementById("slide");
var Backbtn = document.getElementById("Backbtn");
var Nextbtn = document.getElementById("Nextbtn");

var slideimages = new Array(
            "images/img1.jpg",
            "images/img2.jpg",
            "images/img3.jpg",
            "images/img4.jpg",
            "images/img5.jpg",
            "images/img6.jpg",
            "images/img7.jpg",
            "images/img8.jpg",
            "images/img9.jpg",
            "images/img10.jpg"
);

let i=0;

Nextbtn.onclick = function() {
    if(i<9){
    slide.src = slideimages[i+1];
    i++;
    }
}

Backbtn.onclick = function() {
    if(i>0){
    slide.src = slideimages[i-1];
    i--;
    }
}

