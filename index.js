// function capitaliseFirstCharacter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
function createCard(liCard) {
  const ul = document.querySelector("ul");
  liCard.setAttribute("class", "card");
  ul.appendChild(liCard);
}
function createTitle(pokemonCard, liCard) {
  const title = document.createElement("h2");
  title.innerText = pokemonCard.name;
  title.classList.add("card--title");
  liCard.appendChild(title);
}
function createImage(pokemonCard, liCard) {
  const img = document.createElement("img");
  img.src = pokemonCard.sprites.other["official-artwork"].front_default;
  img.setAttribute("width", "256");
  img.classList.add("card--img");
  liCard.appendChild(img);
}
function createCardText(pokemonCard, liCard) {
  const ul = document.createElement("ul");
  ul.classList.add("card--text");
  pokemonCard.stats.forEach((item) => {
    const liStat = document.createElement("li");
    liStat.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`;
    ul.appendChild(liStat);
  });
  liCard.appendChild(ul);
}
const liCard = document.querySelectorAll(".card");
data.forEach((pokemonCard) => {
  const liCard = document.createElement("li");
  createCard(liCard);
  createTitle(pokemonCard, liCard);
  createImage(pokemonCard, liCard);
  createCardText(pokemonCard, liCard);
});
