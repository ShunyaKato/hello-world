//スクロールするたびに処理はしらす
//yをいい感じの値に調整
//CSSをつける
const headerlogo = document.getElementById("headerlogo");
const changePosition = 100;
let isTop = window.pageYOffset <= changePosition ? true : false;

window.onscroll = () => {
  console.log(isTop);
  let y = window.pageYOffset;
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
}
