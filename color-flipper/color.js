const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const items = document.querySelectorAll('.grid-item');

const getColor = () => {
    items.forEach((item)=>{
        let hexColor = "#";
        for (let j=0;j<6;j++){
            hexColor += hex[getRandomNumber()];
        }
        function copy(){
            navigator.clipboard.writeText(hexColor);
            item.attributes['aria-label'].value = "Copied!";
        }
        item.onclick = copy;
        item.attributes['aria-label'].value = "Click to copy!";
        const color = item.firstElementChild;
        const colorName = item.lastElementChild;
        color.style.backgroundColor = hexColor;
        colorName.innerHTML = hexColor;
    })
}
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', getColor);
window.onload = getColor;


