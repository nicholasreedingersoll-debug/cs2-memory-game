console.log("Script started");

let guesses = 0;
let firstCard = "";
let secondCard = "";

function flipCard(cardId) {
  //flips card revealing text
  console.log("click");
  //gets card stores iy
  let card = document.getElementById(cardId);
  //colors it
  card.style.color = "lightgreen"; 
  card.style.backgroundColor = "darkgreen";
  
  //if its first move
  if (firstCard == ""){
  //store fisrt cardid
  firstCard = cardId;
  }
  else {
    //store second card is
    secondCard = cardId;

    //check for match
    setTimeout(checkMatch, 200);
  }

 

}

function checkMatch(){
  let card1Chck = document.getElementById(firstCard);
  let card2Chck = document.getElementById(secondCard);
  if(card1Chck.innerText == card2Chck.innerText) {
    console.log("match");
    card1Chck.style.backgroundColor = "lightblue";
    card2Chck.style.backgroundColor = "lightblue";
    card1Chck.style.color = "blue";
    card2Chck.style.color = "blue";
  }
  else {
    card1Chck.style.backgroundColor = "purple";
    card2Chck.style.backgroundColor = "purple";
    card1Chck.style.color = "purple";
    card2Chck.style.color = "purple";
  }
  firstCard = "";
  secondCard= "";
  
}
