let leftSide = document.querySelector("#leftSide");
let nav = document.querySelector(".fa-bars");
let pin = document.querySelector(".pin");
let pinBack = document.querySelector(".pinBack");
let clickBackColor = document.querySelector(".clickBackColor");
let overlayInput = document.querySelector(".overlayInput");
let navChangeColor = document.querySelector(".rowNav");
let middleSection = document.querySelector("#middleSection");
let clickName = document.querySelector(".clickName");
let toLeft = document.querySelector(".toLeft");
let clickHongouts = document.querySelector(".hongouts>img")
let overlayCard = document.querySelector(".overlayCard");
let googleBell = document.querySelector(".bellBtn");
let overlayGoogle = document.querySelector(".overlayGoogle");
let bellGmail = document.querySelector(".fa-th");
let overlayGmail = document.querySelector(".overlayGmail");
let nothingPinned = document.querySelector(".nothingPinned");
let circlePin = document.querySelector(".circlePin");
let middleNames=document.querySelector(".middleNames");


let open = true;
nav.addEventListener("click", function () {
    if (open) {
        leftSide.style.left = "0";
        middleSection.style.background = "#F2F2F2";
        circlePin.style.background = "#7BAAF7";
        circlePin.style.left = "-10%";
        nothingPinned.style.left = "60%";
        open = false;
    }
    else {
        leftSide.style.left = "-30%";
        // middleSection.style.background = "#7BAAF7";
        circlePin.style.left = "-10%";
        nothingPinned.style.left = "50%";
        open = true;
    }
})

let slide = true;
pin.addEventListener("click", function () {
    if (slide) {
        pin.style.left = "49%";
        pinBack.style.background = "white";
        pinBack.style.transition = ".4s";
        middleSection.style.background = "#7BAAF7";
        middleSection.style.zIndex = "-2";
        nothingPinned.style.display = "block";
        middleNames.style.opacity="0";

        slide = false;
    }
    else {
        pin.style.left = "-1px";
        pinBack.style.background = "blue";
        pinBack.style.transition = ".4s";
        middleSection.style.background = "none";
        nothingPinned.style.display = "none";
        middleNames.style.opacity="1";

        slide = true;
    }
})

clickBackColor.addEventListener("click", function () {
    navChangeColor.style.background = "white";
    clickName.innerHTML = "Back";
    clickName.style.color = "black";
    overlayInput.style.top = "60px";
    
    middleNames.style.opacity="0";

    overlayInput.style.transition = "all .4s ease-in-out";

    middleSection.addEventListener("click", function () {
        navChangeColor.style.background = "none";
        clickName.innerHTML = "Inbox";
        clickName.style.color = "white";
        overlayInput.style.top = "-287px";       
        overlayInput.style.transition = "none";
        middleNames.style.opacity="1";


    })
})

clickHongouts.addEventListener("click", function () {
    if (open) {
        overlayCard.style.opacity = "1";
        open = false;
    middleNames.style.zIndex="-4";

    }
    else {
        overlayCard.style.opacity = "0";
        open = true;
    }
})

googleBell.addEventListener("click", function () {
    if (open) {
        overlayGoogle.style.opacity = "1";
        open = false;
    } else {
        overlayGoogle.style.opacity = "0";
        open = true;
    }
})

bellGmail.addEventListener("click", function () {
    if (open) {
        overlayGmail.style.display = "block";
        open = false;
    }
    else {
        overlayGmail.style.display = "none";
        open = true;
    }
})

// let imgs =["imgs/admin.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg","imgs/samirmlm.jpg"]

// imgs.forEach(function(value,index){
//     let ul=document.querySelector("ul");
//     let li=document.querySelector("li");
//     let images=document.querySelector("img");
//     ul.appendChild(li);
//     img.appendChild(imgs);
// })