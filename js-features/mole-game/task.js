const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadHole = 0;
let lostHole = 0;

function getHole (index) {
  document.getElementById(`hole${index}`).onclick = function () {
    if (document.getElementById(`hole${index}`).classList.contains('hole_has-mole')){
      deadHole ++;
    }else {
      lostHole ++;
    }
    dead.textContent = deadHole;
    lost.textContent = lostHole;

    if(deadHole >= 10){
      alert('Вы выиграли');
      dead.textContent = 0;
      location.reload();
    }

    if(lostHole >= 5){
      alert('Вы проиграли');
      lost.textContent = 0;
      location.reload();
    }
  }

}

for (let i = 1; i < 10; i++) {
    getHole(i);
}




