let noClicks = 0;
const gifElement = document.getElementById("asking");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

function moveNoButton() {
  const maxX = window.innerWidth - noButton.clientWidth - 50;
  const maxY = window.innerHeight - noButton.clientHeight - 50;

  const x = Math.max(10, Math.random() * maxX);
  const y = Math.max(10, Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
  noButton.style.display = "block";
}

noButton.addEventListener("click", () => {
  gifElement.src = "keys/no.gif";
  if (noClicks === 0) {
    noButton.textContent = "Be serious now, Pookie";
  } else {
    moveNoButton(); // Move button randomly
  }
  noButton.style.visibility = "visible";
  noButton.style.opacity = "1";
  noClicks++;
});

yesButton.addEventListener("click", () => {
  gifElement.src = "keys/yes.gif";
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 0);
});
