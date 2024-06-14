const btnRef = document.getElementById('checkGuess')
const inputRef = document.getElementById('guessField')
const resultRef = document.getElementById('guessResult')

const randomNum = Math.round(Math.random() * 100) + 1
console.log(randomNum);

btnRef.addEventListener('click', onClick =>{
    const userNum = Number(inputRef.value)

    if(userNum === randomNum){
        resultRef.textContent = 'Ви вгадали'
    }else{
        resultRef.textContent = 'Ви не вгадали'
    }
})