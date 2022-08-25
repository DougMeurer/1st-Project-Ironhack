const newGame = new Game ()
const playBtn = document.querySelector('.play-button')
const bntStart = document.querySelector('.enter')
const start = document.querySelector('#container')
const gameShow = document.querySelector('#container2')


newGame.startingGame()

bntStart.addEventListener('click', () => {
    
    console.log(gameShow)
    start.style.display = "none";
    gameShow.style.display = "flex";


})

playBtn.addEventListener('click', () => {     
          
        newGame.flip()          

        console.log("clicado")
        console.log(newGame.cpuDeck)
        console.log(newGame.playerDeck)
        console.log(newGame.monte)
       
    
})

