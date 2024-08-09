function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

console.log(realPic());

const fakepic = "https://thispersondoesnotexist.com/";
console.log(fakepic);

const imgCon = document.getElementById("images");

const resultCon = document.getElementById("result");

const playAgain = document.createElement("button");
playAgain.textContent = "play again";
playAgain.onclick = game;

function game() {
  resultCon.innerHTML = "";
  imgCon.innerHTML = "";

  const randBool = Math.random() > 0.5;
  const arr = [randBool, !randBool];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakepic;
    imgCon.appendChild(img);

    img.onclick = function () {
      resultCon.textContent = isReal ? "good job you got it right" : "go home!";
      resultCon.appendChild(playAgain);
    };
  }
}

game();
