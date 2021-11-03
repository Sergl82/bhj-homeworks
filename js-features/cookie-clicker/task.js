const cookie = document.getElementById('cookie')
const clickerCounter = document.getElementById('clicker__counter');

clickImage = () => {
  clickerCounter.textContent = +clickerCounter.textContent +1;
if(clickerCounter.textContent % 2 !== 0){
  cookie.width = "350";
}else {
  cookie.width = "200";
  }

}
cookie.addEventListener('click', clickImage);
