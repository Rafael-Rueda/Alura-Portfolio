import './Card/cards.js'
import carddata from './Card/cards.js'
import Card from './Card'

export default function Main() {
    const cards = carddata.map(obj => {
        return <Card {...obj}/>
    })
    return (
        <main>
            {cards}
        </main>
    )
}