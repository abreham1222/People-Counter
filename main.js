let coutnBtn = document.getElementById("count")
let previos = document.getElementById("previos-en");
let count = 0;

function increment() {
  count += 1;
  coutnBtn.innerText = count;
}

function save() {
  let saveData = count + " - ";
  previos.textContent += saveData;
  coutnBtn.textContent = 0;
  count = 0;
}

