const newGame = new Game ()
const compDeck = document.querySelector('.computer-deck')
const playerBtn = document.querySelector('.player')
const result = document.querySelector('#output')
const bntStart = document.querySelector('.enter')
const start = document.querySelector('#container')
const gameShow = document.querySelector('.show')
console.log(gameShow)

newGame.startingGame()

bntStart.addEventListener('click', () => {
    console.log(gameShow)
    start.style.display = "none";
    gameShow.style.display = "flex";


})


playerBtn.addEventListener('click', () => {
       
    newGame.flip()
    console.log("clicado")
    console.log(newGame.cpuDeck)
    console.log(newGame.playerDeck)
    console.log(newGame.monte)

    // compDeck.innerText = newGame.cpuDeck.length
    // playerDeck.innerText = newGame.playerDeck.length
    
})

