const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
const macieks = document.getElementById("animacja");

macieks.forEach((maciek) => {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    maciek.innerText = maciek.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return maciek.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= maciek.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 8;
  }, 30);
});