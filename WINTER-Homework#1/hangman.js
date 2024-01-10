//the beninging
const azbuka = document.querySelector(".alphabet");
const theMovie = document.querySelector(".zborot");
const guessText = document.querySelector("#guesses");
const model = document.querySelector(".game");

let theMovieIs,
  correctLetters = [""],
  wrongGuess = 0;
const maxGuessing = 6;

//the buttons

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  azbuka.appendChild(button);
  button.addEventListener("click", function () {
    console.log(this.innerText + " button was clicked");
    game(this, this.innerText);
  });
}
// this = button and this.innerText = clickedLetter, game mi e funkcijata

// put many random movies to be chosen from

const movieList = [
  {
    movie: "transformers",
    hint: "It's about cars turning into robots.",
  },
  {
    movie: "titanic",
    hint: "It's about two people who find eachother on a ship.",
  },
  {
    movie: "narnia",
    hint: "It's about these kids who discover a magic world in their closet.",
  },
  {
    movie: "oppenheimer",
    hint: "It's about building the first atomic bomb.",
  },
  {
    movie: "interstellar",
    hint: "It's about finding a new planet to live on. ",
  },
  {
    movie: "ponyo",
    hint: "It's about a goldfish who escapes from the ocean and is found by a 5 year old boy.",
  },
  {
    movie: "seven",
    hint: "It's about murders that represent the seven deadly sins.",
  },
];

function chooseARandomMovie() {
  const { movie, hint } =
    movieList[Math.floor(Math.random() * movieList.length)];
  theMovieIs = movie;
  console.log(movie);
  document.querySelector("#hint").innerText = hint;

  let film = movie.split("");
  let liLetters = [];

  for (let car of film) {
    liLetters.push(`<li class="letter"></li>`);
  }

  let spoj = liLetters.join("");
  theMovie.innerHTML = spoj;
}

chooseARandomMovie();

//now lets check if the letters match with the given movie

let message = document.createElement("div");
model.appendChild(message);

let container = document.getElementById("platform");

let imgEl = document.createElement("img");
container.appendChild(imgEl);

function game(button, clickedLetter) {
  if (theMovieIs.includes(clickedLetter)) {
    //now put these letters on display
    [...theMovieIs].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        theMovie.querySelectorAll("li")[index].innerText = letter;
      }
    });
  } else {
    wrongGuess++;
    if (wrongGuess <= 6) {
      imgEl.src = images[wrongGuess - 1];
    }
    button.disabled = true;
    guessText.innerText = `${wrongGuess} / ${maxGuessing}`;

    //game over
    if (wrongGuess === maxGuessing) {
      !alert("You lost");
      {
        window.location.reload();
      }
      return;
    }
    // victory -go chita samo ako kliknes na bukvite za da alertne pobeda od koa kje go pogodis zborot 
    if (theMovieIs.length <= correctLetters.length) {
      !alert("You won");
      {
        window.location.reload();
      }
      return;
    }
  }
}
//lowkey works thank god se crta chovecheto
let images = [
  "https://64.media.tumblr.com/008cca12dadf1516eec9390be0af510f/78b85eaf528b97a8-98/s400x600/02f5e8ffe7f1349c7d0f6489e492576b980dbd84.pnj",
  "https://64.media.tumblr.com/69d2e29e3ebd10e4375a40b40a3dc8fb/78b85eaf528b97a8-13/s250x400/181fa913bca6e2893ddf8ca5d1955f9c2601ad2a.pnj",
  "https://64.media.tumblr.com/1d75ea46829b8db133ebd026d7d8f717/78b85eaf528b97a8-25/s250x400/10245c4b5f581a6e05d7054138013d8e9691445a.pnj",
  "https://64.media.tumblr.com/4deb94a3634d0abe8415e07623a4e0cc/78b85eaf528b97a8-b0/s250x400/fbbf9b6156477b018151e9cae3779b27e477513b.pnj",
  "https://64.media.tumblr.com/b0b5b0b50d25cbfff05822c4642a0e67/78b85eaf528b97a8-94/s400x600/a9595cc8ff4642f4f3fc2a2804ba3fccb954cc60.pnj",
  "https://64.media.tumblr.com/f75ef5f077b7f2ce2ee117d84e195f62/78b85eaf528b97a8-e9/s400x600/d28a4412182492e5275bc162a7f9944d1ab383e4.pnj",
];
