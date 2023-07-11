let player = {
  name: "Kartik",
  chips: 200,
};
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;

let message_el = document.getElementById("message_el");
let card_el = document.getElementById("card_el");
let sum_el = document.getElementById("sum_el");
let player_el = document.getElementById("player_el");
player_el.textContent = player.name + ": $" + player.chips;

function startGame() {
  if (player.chips === 0) {
    message_el.textContent = "You Don't Have Enough CHIPS!!";
    return;
  }
  player.chips -= 10;
  player_el.textContent = player.name + ": $" + player.chips;
  isAlive = true;
  let firstcard = random();
  let secondcard = random();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {
  card_el.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    card_el.textContent += cards[i] + " ";
  }

  sum_el.textContent = "Sum: " + sum;
  if (sum < 21) {
    isAlive = true;
    hasBlackjack = false;
    message_el.textContent = "Do you want to draw a new card?";
  }
  if (sum === 21) {
    isAlive = true;
    hasBlackjack = true;
    message_el.textContent = "You have got Blackjack!";
    player.chips += 30;
    player_el.textContent = player.name + ": $" + player.chips;
  }
  if (sum > 21) {
    isAlive = false;
    hasBlackjack = false;
    message_el.textContent = "You are out of Game!";
  }
}

function random() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function newCard() {
  if (isAlive == true && hasBlackjack == false) {
    let newcard = random();
    sum += newcard;
    cards.push(newcard);
    renderGame();
  }
}
