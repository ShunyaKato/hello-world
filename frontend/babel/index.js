//スクロールするたびに処理はしらす
//yをいい感じの値に調整
//CSSをつける
window.onload = () => {
  const headerlogo = document.getElementById("headerlogo");
  const changePosition = 100;
  let isTop = window.pageYOffset <= changePosition ? true : false;
  console.log(isTop);

  const hideLogo = () => {
    headerlogo.classList.add("fadeout");
    headerlogo.classList.remove("fadein");
  }

  const showLogo = () => {
    headerlogo.classList.remove("fadeout");
    headerlogo.classList.add("fadein");
  }

  // if (isTop === true) {
  //   headerlogo.style.display = "none";
  // }

  if (isTop === false) {
    showLogo();
  }

  window.onscroll = () => {
    let y = window.pageYOffset;
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
  }
}
