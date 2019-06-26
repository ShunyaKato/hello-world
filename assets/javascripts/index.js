"use strict";

//スクロールするたびに処理はしらす
//yをいい感じの値に調整
//CSSをつける
window.onload = function () {
  var headerlogo = document.getElementById("headerlogo");
  var changePosition = 100;
  var isTop = window.pageYOffset <= changePosition ? true : false;
  console.log(isTop);

  var hideLogo = function hideLogo() {
    headerlogo.classList.add("fadeout");
    headerlogo.classList.remove("fadein");
  };

  var showLogo = function showLogo() {
    headerlogo.classList.remove("fadeout");
    headerlogo.classList.add("fadein");
  }; // if (isTop === true) {
  //   headerlogo.style.display = "none";
  // }


  if (isTop === false) {
    showLogo();
  }

  window.onscroll = function () {
    var y = window.pageYOffset;

    if (y <= changePosition) {
      if (isTop === false) {
        isTop = true;
        hideLogo();
      }

      return false;
    }

    if (isTop === true) {
      isTop = false;
      showLogo();
    }
  };
};