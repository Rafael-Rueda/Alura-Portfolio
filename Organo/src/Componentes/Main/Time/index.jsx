import Card from '../Card'
import './style.css'
const Time = (props) => {
    const styles_h1 = {
        borderBottom: '5px solid' + props.corprimaria
    }
    const styles_section = {
        backgroundColor: props.corsecundaria
    }
    return (
        props.cards.length > 0 && <section style={styles_section} className={props.nome.replace(' ', '').toLowerCase() + " cards_section"}>
            <h1 style={styles_h1}>{props.nome}</h1>
            <div className="cards_container">
            {props.cards.map(card => {
                return <Card key={card.id} nome={card.nome} imagem={card.imagem} cargo={card.cargo}/>
            })}
            </div>
        </section>
    )
}

export default Time