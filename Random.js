function randomColor() {
    let color='#'
    color += Math.floor(Math.random()*1000000)
    return color
}

function backgroundChange() {
    let ele=document.getElementById("mydiv")
    let change=randomColor()
    ele.style.backgroundColor=change;
}
const ele=document.getElementById('mydiv')
ele.addEventListener("click",backgroundChange)