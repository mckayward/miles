var aboutStatements = [
  "is a silly goose.",
  "is a crazy cat.",
  "probably doesn't even like pizza.",
  "is a kookoo koala.",
  "is a lazy llama.",
  "is a mean manatee.",
  "is a clumsy camel.",
  "is a sleepy sasquatch.",
  "is a funky monkey.",
  "is a bonkers baboon.",
  "is a wiley coyote.",
  "is a wiley coyote.",
  "doesn't even own milesheiner.com",
  "is a not-nice ninja.",
  "is a not-cool nincompoop.",
  "is a wacky wallaby.",
  "is a weird dude.",
  "bobs for apples in the toilet. And he likes it!",
];

function getRandomStatement () {
  var randomIndex = Math.floor(Math.random()*aboutStatements.length)
  return aboutStatements[randomIndex]
}

function changeStatement () {
  var elem = document.querySelector('#aboutStatement');
  var statement = getRandomStatement();

  // Make sure that every time the button is clicked, the statement changes.
  // This checks if the randomly selected statement is the same as the currently
  // showing statement. Then tries again if we accidentally selected the same
  // statement
  if (elem.innerHTML === statement) {
    changeStatement();
    return
  }

  elem.innerHTML = statement;
};

document.addEventListener('click', function (event) {

	if (!event.target.matches('#changeStatementButton')) return;

	event.preventDefault();

  changeStatement()
}, false);
