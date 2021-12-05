import {useState} from 'react'

let dice1 = "../assets/images/dice1.png"

let dice2 = "../assets/images/dice2.png"

let dice3 = "../assets/images/dice3.png"

let dice4 = "../assets/images/dice4.png"

let dice5 = "../assets/images/dice5.png"

let dice6 = "../assets/images/dice6.png"

let diceEmpty = "../assets/images/dice-empty.png"



function Dice() {

    let arrayDice = [dice1, dice2, dice3, dice4, dice5, dice6]

    let randomDice = arrayDice[Math.floor(Math.random() * arrayDice.length)]

    let [path, setPath] = useState(randomDice)

    function handleClick(){
        setPath(diceEmpty)
        setTimeout(() => {
            setPath(arrayDice[Math.floor(Math.random() * arrayDice.length)])
        }, 1000)
    }

    return (
        <div>
            <img onClick={handleClick} src={path} />
        </div>
    )
}

export default Dice