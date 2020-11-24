let clickCount = 0;
let  click = document.getElementById('count-click');
const buttonClick = document.getElementById("button_test");
buttonClick.addEventListener("click", () => click.innerHTML = clickCount += 1);

