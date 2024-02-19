const btnImg = document.querySelectorAll(".btn-img");
const btnImgFirst = document.querySelector(".btn-img-first");
const btnImgSecond = document.querySelector(".btn-img-second");
const btnImgThird = document.querySelector(".btn-img-third");
const btnImgFourth = document.querySelector(".btn-img-fourth");

const innerPara = document.querySelectorAll(".inner-para");
const innerParaFirst = document.querySelector(".inner-para1");
const innerParaSecond = document.querySelector(".inner-para2");
const innerParaThird = document.querySelector(".inner-para3");
const innerParaFourth = document.querySelector(".inner-para4");

const paraDiv = document.querySelector("#para-div");
const innerHeaderAndImage = document.querySelector("#inner-headerAndImage");

// Come back later to fix thsi
// btnImg.forEach(function (btn) {

// });

// For the sake of this challenge, i'll just hardcode like this, i find a way to fix this later.
btnImgFirst.addEventListener("click", function () {
    if (innerParaFirst.style.display === "block") {
        innerParaFirst.style.display = "none";
        btnImgFirst.src = "./assets/images/icon-plus.svg";
    } else {
        btnImgFirst.src = "./assets/images/icon-minus.svg";
        innerParaFirst.style.display = "block";
    }
});

btnImgSecond.addEventListener("click", function () {
    if (innerParaSecond.style.display === "block") {
        innerParaSecond.style.display = "none";
        btnImgSecond.src = "./assets/images/icon-plus.svg";
    } else {
        innerParaSecond.style.display = "block";
        btnImgSecond.src = "./assets/images/icon-minus.svg";

    }
});

btnImgThird.addEventListener("click", function () {
    if (innerParaThird.style.display === "block") {
        innerParaThird.style.display = "none";
        btnImgThird.src = "./assets/images/icon-plus.svg";

    } else {
        innerParaThird.style.display = "block";
        btnImgThird.src = "./assets/images/icon-minus.svg";

    }
});

btnImgFourth.addEventListener("click", function () {
    if (innerParaFourth.style.display === "block") {
        innerParaFourth.style.display = "none";
        btnImgFourth.src = "./assets/images/icon-plus.svg";

    } else {
        innerParaFourth.style.display = "block";
        btnImgFourth.src = "./assets/images/icon-minus.svg";

    }
});