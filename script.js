function realpic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
console.log(realpic());

const fakepic = "https://thispersondoesnotexist.com/";

const imgcon = document.getElementById("images");
const resultcon = document.getElementById("result");

const playagain = document.createElement("button");
playagain.textContent = "'play again !!";
playagain.onclick = game;

function game() {
  resultcon.innerHTML = "";
  imgcon.innerHTML = "";

  const randBool = Math.random() > 0.5;
  const arr = [randBool, !randBool];

  for (const isreal of arr) {
    const img = document.createElement("img");
    img.src = isreal ? realpic() : fakepic;
    imgcon.appendChild(img);

    img.onclick = function () {
      resultcon.textContent = isreal ? "correct answer!!" : "go home!!";
      resultcon.appendChild(playagain);
    };
  }
}

game();
