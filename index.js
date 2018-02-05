var myImg = document.getElementById("avatar");
var menuOpen = 0
var vpos = 0;
var hpos = 0;
var imgSize= 100;
var removed = 0;
var hatH = 0;
var shirtH = 0;
var bowH = 0;
var hatV = 0;
var shirtV = 0;
var bowV = 0;
var menuCont = 0;
var hatSize = 25;
var shirtSize = 25;
var bowSize = 25;


document.getElementById("butAvatar1").addEventListener("click",function(){
    if (removed == 0) {
    myImg.src = "img/ava1.png";
    }
});

document.getElementById("butAvatar2").addEventListener("click",function(){
    if (removed == 0) {
        myImg.src = "img/ava2.png";
    }
});

document.getElementById("menuButton").addEventListener("click",function(){
    if (removed == 0) {
        if (menuOpen == 0) {
            document.getElementById("menu").style.right="0px";
            menuOpen = 1;
        }
        else {
            document.getElementById("menu").style.right="-75px";
            menuOpen = 0;
        }
    }
});

document.getElementById("upBut").addEventListener("click",function(){
    if (removed == 0) {
        vpos = vpos + 7
        document.getElementById("center").style.bottom=vpos+"px"
    }
});

document.getElementById("downBut").addEventListener("click",function(){
    if (removed == 0) {
        vpos = vpos - 7
        document.getElementById("center").style.bottom=vpos+"px"
    }
}); 

document.getElementById("leftBut").addEventListener("click",function(){
    if (removed == 0) {
        hpos = hpos - 7
        document.getElementById("center").style.left=hpos+"px"
    }
});

document.getElementById("rightBut").addEventListener("click",function(){
    if (removed == 0) {
        hpos = hpos + 7
        document.getElementById("center").style.left=hpos+"px"
    }
}); 

document.getElementById("butPlus").addEventListener("click",function(){
    if (removed == 0) {
        imgSize = imgSize+1
        document.getElementById("avatar").style.height=imgSize+"%"
    }
}); 

document.getElementById("butMinus").addEventListener("click",function(){
    if (removed == 0) {
        imgSize = imgSize-1
        document.getElementById("avatar").style.height=imgSize+"%"
    }
}); 

document.getElementById("avatar").addEventListener("click",function(){
    removed = 1;
    document.getElementById("butPlus").style.opacity=0;
    document.getElementById("butMinus").style.opacity=0;
    document.getElementById("downBut").style.opacity=0;
    document.getElementById("upBut").style.opacity=0;
    document.getElementById("leftBut").style.opacity=0;
    document.getElementById("rightBut").style.opacity=0;
    document.getElementById("butAvatar1").style.opacity=0;
    document.getElementById("butAvatar2").style.opacity=0;
});

document.getElementById("header").addEventListener("click",function(){
    removed = 0;
    document.getElementById("butPlus").style.opacity=1;
    document.getElementById("butMinus").style.opacity=1;
    document.getElementById("downBut").style.opacity=1;
    document.getElementById("upBut").style.opacity=1;
    document.getElementById("leftBut").style.opacity=1;
    document.getElementById("rightBut").style.opacity=1;
    document.getElementById("butAvatar1").style.opacity=1;
    document.getElementById("butAvatar2").style.opacity=1;
});

document.getElementById("button1").addEventListener("click",function(){
    document.getElementById("hat").style.display="block";
    menuCont = 1;
});

document.getElementById("button2").addEventListener("click",function(){
    document.getElementById("shirt").style.display="block";
    menuCont = 2;
});

document.getElementById("button3").addEventListener("click",function(){
    document.getElementById("bow").style.display="block";
    menuCont = 3;
});

document.getElementById("menuUp").addEventListener("click",function(){
    if (menuCont == 1) {
        hatV = hatV + 7;
        document.getElementById("hat").style.bottom=hatV+"px";
    }
    if (menuCont == 2) {
        shirtV = shirtV + 7;
        document.getElementById("shirt").style.bottom=shirtV+"px";
    }
    if (menuCont == 3) {
        bowV = bowV + 7;
        document.getElementById("bow").style.bottom=bowV+"px";
    }
});

document.getElementById("menuDown").addEventListener("click",function(){
    if (menuCont == 1) {
        hatV = hatV - 7;
        document.getElementById("hat").style.bottom=hatV+"px";
    }
    if (menuCont == 2) {
        shirtV = shirtV - 7;
        document.getElementById("shirt").style.bottom=shirtV+"px";
    }
    if (menuCont == 3) {
        bowV = bowV - 7;
        document.getElementById("bow").style.bottom=bowV+"px";
    }
});

document.getElementById("menuLeft").addEventListener("click",function(){
    if (menuCont == 1) {
        hatH = hatH + 7;
        document.getElementById("hat").style.right=hatH+"px";
    }
    if (menuCont == 2) {
        shirtH = shirtH + 7;
        document.getElementById("shirt").style.right=shirtH+"px";
    }
    if (menuCont == 3) {
        bowH = bowH + 7;
        document.getElementById("bow").style.right=bowH+"px";
    }
});

document.getElementById("menuRight").addEventListener("click",function(){
    if (menuCont == 1) {
        hatH = hatH - 7;
        document.getElementById("hat").style.right=hatH+"px";
    }
    if (menuCont == 2) {
        shirtH = shirtH - 7;
        document.getElementById("shirt").style.right=shirtH+"px";
    }
    if (menuCont == 3) {
        bowH = bowH - 7;
        document.getElementById("bow").style.right=bowH+"px";
    }
});

document.getElementById("menuPlus").addEventListener("click",function(){
    if (menuCont == 1) {
        hatSize = hatSize + 0.25
        document.getElementById("hat").style.height=hatSize+"vh";
    }
    if (menuCont == 2) {
        shirtSize = shirtSize + 0.25
        document.getElementById("shirt").style.height=shirtSize+"vh";
    }
    if (menuCont == 3) {
        bowSize = bowSize + 0.25
        document.getElementById("bow").style.height=bowSize+"vh";
    }
});

document.getElementById("menuMinus").addEventListener("click",function(){
    if (menuCont == 1) {
        hatSize = hatSize - 0.25
        document.getElementById("hat").style.height=hatSize+"vh";
    }
    if (menuCont == 2) {
        shirtSize = shirtSize - 0.25
        document.getElementById("shirt").style.height=shirtSize+"vh";
    }
    if (menuCont == 3) {
        bowSize = bowSize - 0.25
        document.getElementById("bow").style.height=bowSize+"vh";
    }
});