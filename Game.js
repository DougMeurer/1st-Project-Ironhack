class Game {
    constructor(name) {
        this.deck = ["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣", "A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦", "A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠", "A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"]
        this.playerDeck = []
        this.cpuDeck = []
        this.playerHand = ""
        this.cpuHand = ""
        this.monte = []
        this.pointsLeft = 50
        this.pointsRight = 50
        this.log = ""
    }

    startingGame () {
        let deckRandom = this.deck.sort(() => {
            return Math.random() - 0.5;
        })

        this.cpuDeck = deckRandom.slice(0, 26)
        this.playerDeck = deckRandom.slice(25, 51)

    }

    flip () {
        this.playerHand = this.playerDeck.shift()
        this.cpuHand = this.cpuDeck.shift()

        if (this.cpuHand.charAt(0) == this.playerHand.charAt(0)) {
            this.monte.push(this.cpuHand, this.playerHand)  
            this.cpuHand = []
            this.playerHand = []

            return
        }

        if (this.cpuHand.charAt(0) > this.playerHand.charAt(0)) {

            this.cpuDeck.push(this.playerHand, this.cpuHand)

                if (this.cpuDeck < 0) {
                    return
                }

            let rightR = document.querySelector('.playTug')
            let leftL = document.querySelector('.compTug')

            this.pointsRight += 5
            this.pointsLeft -= 5

            rightR.style.setProperty("--width-right", `${this.pointsRight}vw`)
            leftL.style.setProperty("--width-left", `${this.pointsLeft}vw`)

            if (this.pointsRight === 100) {
                this.log = "NOT THIS TIME WARRIOR!"
               
            }
            
            if(this.monte.length) {
                this.cpuDeck.push(...this.monte)
                this.monte = []
            }

            this.cpuHand = []
            this.playerHand = []

            return
        } 

        if (this.cpuHand.charAt(0) < this.playerHand.charAt(0)) {

            this.playerDeck.push(this.cpuHand, this.playerHand)

                if (this.playerDeck < 0) {
                    return
                }

            let rightR = document.querySelector('.playTug')
            let leftL = document.querySelector('.compTug')
 

            this.pointsRight -= 5
            this.pointsLeft += 5

            leftL.style.setProperty("--width-left", `${this.pointsLeft}vw`)
            rightR.style.setProperty("--width-right", `${this.pointsRight}vw`)
         
            if (this.pointsLeft === 100) {
                this.log = "CONGRATS WARRIOR! YOU'RE THE WINNER!!!!"
                
            }

            if(this.monte.length) {
                this.playerDeck.push(...this.monte)
                this.monte = []
            }

            this.cpuHand = []
            this.playerHand = []
            return
        }
    }
}
