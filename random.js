
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
  const min = parseInt(document.getElementById('min').value);
  const max = document.getElementById('max').value;
  const quantity = document.getElementById('quantity').value;
  const option = document.getElementById('sort').value;
  const result = document.querySelector('.result');
  let temp = [];
  result.innerHTML = "";
  for(let i = 0; i < quantity; i++){
    temp.push(getRandomNumber(min, max));
  }
  if(option == 'asc'){
    temp.sort(function(a, b){return a - b});
  } else if(option == 'desc'){
    temp.sort(function(a, b){return b - a});
  }
  for(let i = 0; i < quantity; i++){
    result.innerHTML += temp[i] + " ";
  }
})


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min))+min;
}
