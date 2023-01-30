import './styles.css'
import Card from './Card'
import carddata from './Card/carddata'
export default function Main() {
    /* Cards */
    const cards = carddata.map(obj => {
        return <Card src={obj.src} rating={obj.rating} title={obj.title} $value={obj.$value} status={obj.status} key={obj.id} />
    })

    return (
        <main>
            <section>
            <img src="Group 77.png"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
            <section className="cards">
                {cards}
            </section>
        </main>
    )
}
