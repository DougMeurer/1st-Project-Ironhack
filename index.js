const newGame = new Game ()
const compDeck = document.querySelector('.computer-deck')
const playerDeck = document.querySelector('.player-deck')

newGame.startingGame() // deixe invocada idiota -D



playerDeck.addEventListener('click', () => {
    newGame.flip()
})

