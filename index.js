const newGame = new Game()
const playBtn = document.querySelector('.play-button')
const bntStart = document.querySelector('.enter')
const log = document.querySelector('.log')
const war = document.querySelector('.war')
const start = document.querySelector('#container')
const gameShow = document.querySelector('#container2')


newGame.startingGame()

bntStart.addEventListener('click', () => {

    console.log(gameShow)
    start.style.display = "none";
    gameShow.style.display = "flex";
})

playBtn.addEventListener('click', () => {     

    const btnSound = new Audio('./Music/soundeffect.mp3')
    btnSound.volume = 0.3
    btnSound.play()

        newGame.flip()

        log.innerText = newGame.log
        
        console.log(newGame.pointsRight)
        console.log(newGame.pointsLeft)

        if (newGame.pointsLeft === 100) {
            war.innerHTML = `
            <form>
        <button> PLAY AGAIN!  </button> </form>

            `
            playBtn.style.display = "none"
        } 

        if (newGame.pointsRight === 100) {
            // const gameOver = new Audio('./Music/GameOver.mp3')
            // gameOver.volume = 0.3
            // gameOver.play()
            war.innerHTML = `
            <form> 
            <button> TRY AGAIN! </button> </form>

            `
            playBtn.style.display = "none"


        } 
        

       
    
})

