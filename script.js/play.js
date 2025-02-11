// function play(){

// const hideHome = document.getElementById('Home-Page')

// hideHome.classList.add('hidden')


// const AddPlayGround = document.getElementById('Play-Ground')

// AddPlayGround.classList.remove('hidden')

// }


function continueGame(){

const Alphabet = getRandomAlphabet()

console.log(Alphabet)

// set Randomly generated alphabet
const currentAlphabet = document.getElementById('current-alphabet')

currentAlphabet.innerText=Alphabet

// set background color

setBgcolor(Alphabet)

}

function play(){

hideElementbyID('Home-Page')

getSection('Play-Ground')

continueGame()

}

