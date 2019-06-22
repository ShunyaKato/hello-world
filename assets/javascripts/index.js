"use strict";

//スクロールするたびに処理はしらす
//yをいい感じの値に調整
//CSSをつける
var headerlogo = document.getElementById("headerlogo");
var changePosition = 100;
var isTop = window.pageYOffset <= changePosition ? true : false;

window.onscroll = function () {
  console.log(isTop);
  var y = window.pageYOffset;

  if (y <= changePosition) {
    if (isTop === false) {
      isTop = true;
      headerlogo.classList.add("fadeout");
      headerlogo.classList.remove("fadein");
    }

    return false;
  }

  if (isTop === true) {
    isTop = false;
    headerlogo.classList.remove("fadeout");
    headerlogo.classList.add("fadein");
  }
};