class Game {
    constructor() {
        this.deck = ["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣", "A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦", "A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠", "A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"]
        this.playerDeck = []
        this.cpuDeck = []
        this.playerHand = ""
        this.cpuHand = ""
        this.monte = []
    }

    startingGame () {
        let deckRandom = this.deck.sort(() => {
            return Math.random() - 0.5;
        })

        this.cpuDeck = deckRandom.slice(0, 26)
        this.playerDeck = deckRandom.slice(25, 51)
        
        console.log(this.cpuDeck)
        console.log(this.playerDeck)
    }

    flip () {
        this.playerHand = this.playerDeck[0]
        this.cpuHand = this.cpuDeck[0]

        if (this.playerHand.charAt(0) > this.cpuHand.charAt(0)) {
            this.playerDeck.push(this.cpuHand)
            this.cpuDeck.shift()
        } else if (this.cpuHand.charAt(0) > this.playerHand.charAt(0)) {
            this.cpuDeck.push(this.playerHand)
            this.playerDeck.shift()
        } else if (this.cpuHand.charAt(0) == this.playerHand.charAt(0)) {
            this.monte.push(this.cpuHand, this.playerHand)  
        }
    }

    // o player que ganhar deve pegar o valor de this.monte || 
}
