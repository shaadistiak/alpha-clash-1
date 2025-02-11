// Another Way

function hideElementbyID(elementID){

const element =document.getElementById(elementID)


element.classList.add('hidden')

}


function getSection(elementID){


const element = document.getElementById(elementID)

element.classList.remove('hidden')

}

function setBgcolor(elementid){

const element = document.getElementById(elementid)

element.classList.add('bg-amber-500')

}



function getRandomAlphabet(){

const RandomAlphaString = 'abcdefghijklmnopqrstuvwxyz'

const Alphaslice= RandomAlphaString.split('')
// console.log(Alphaslice)

const randomNum = Math.random()*25
const index = Math.round(randomNum)
// console.log(index)

const Alphabet = Alphaslice[index]

// console.log(index,Alphabet)
return Alphabet

}