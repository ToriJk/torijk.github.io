const btnNo = document.getElementsByClassName('btn__no')

maxElemLeft = document.documentElement.clientWidth - btnNo[0].offsetWidth;
maxElemTop = document.documentElement.clientHeight - btnNo[0].offsetHeight;
  
btnNo[0].addEventListener("mouseover", handleHover)

let elemL, elemT;

function handleHover() {
    elemL = Math.random() * maxElemLeft;
    btnNo[0].style.left = elemL + 'px'
    elemT = Math.random() * maxElemTop;
    btnNo[0].style.top = elemT + 'px'
}
