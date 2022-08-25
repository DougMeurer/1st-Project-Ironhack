class Game {
    constructor(name) {
        this.deck = ["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣", "A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦", "A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠", "A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"]
        this.playerDeck = []
        this.cpuDeck = []
        this.playerHand = ""
        this.cpuHand = ""
        this.monte = []
        this.name = ""
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
        this.playerHand = this.playerDeck.shift()
        this.cpuHand = this.cpuDeck.shift()

            console.log("cpu", this.cpuHand)
            console.log("player", this.playerHand)
        
        
        //fazer a excessao do A aqui


        //cartas iguais 
        if (this.cpuHand.charAt(0) == this.playerHand.charAt(0)) {
            console.log("cartas iguais")
            this.monte.push(this.cpuHand, this.playerHand)  
            this.cpuHand = []
            this.playerHand = []

            return
        }

        // carta cpu maior 
        if (this.cpuHand.charAt(0) > this.playerHand.charAt(0)) {
            console.log("cpu ganhou")

            this.cpuDeck.push(this.playerHand, this.cpuHand)
            

            if(this.monte.length) {
                this.cpuDeck.push(...this.monte)
                this.monte = []
            }

            this.cpuHand = []
            this.playerHand = []

            return
        } 
        // carta player maior
        if (this.cpuHand.charAt(0) < this.playerHand.charAt(0)) {
            console.log("player ganhou")

            this.playerDeck.push(this.cpuHand, this.playerHand)
         
            if(this.monte.length) {
                this.playerDeck.push(...this.monte)
                this.monte = []
            }
            this.cpuHand = []
            this.playerHand = []
            return
        }

        // if (this.playerDeck.length >= 45) {
        //     console.log (`GO ON ${this.name}, THE VICTORY IS AT SIGN!!!`)
        //     return
        // }

        // if (this.cpuDeck.length >= 45) {
        //     console.log(`YOU ARE AT MY MERCY! MUAHAHAHAHA`)
        //     return
        // }
        

    }
}
