
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
  const min = parseInt(document.getElementById('min').value);
  const max = document.getElementById('max').value;
  const result = document.querySelector('.result');
  result.innerHTML=getRandomNumber(min, max);
  console.log(Math.random()* (max - min));
})


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min))+min;
}
