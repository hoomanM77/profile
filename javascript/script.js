////////////////////Variables//////////////////////////////////////
const $=document
const btnColors=_qAll('.btn-color')
let targetColor;
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
///////////////////////// change theme fire
btnColors.forEach(function (btn) {
    btn.addEventListener('click',function (e) {
        targetColor=e.target.dataset.color
        document.documentElement.style.setProperty('--bg-primary',targetColor)
    })
})