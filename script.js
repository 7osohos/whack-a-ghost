let score = 0;
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("mole") &&
    !e.target.classList.contains("attacked")
  ) {
    document.querySelector(".mole").classList.add("attacked");
    score += 1;
    document.querySelector(".score").innerHTML = score;
  }
});
let random = 0;
setInterval(() => {
  randomNumber();
  let mole = document.createElement("div");
  mole.classList.add("mole");
  mole.innerHTML = `
                    <div class="eye">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                    <div class="mouth"></div>
`;
  setTimeout(() => {
    mole.remove();
  }, 1200);
  document.querySelectorAll(".hole")[random].appendChild(mole);
}, 1300);

function randomNumber() {
  let old = Math.floor(Math.random() * 9);
  if (random == old) {
    randomNumber();
  } else {
    random = old;
  }
}
