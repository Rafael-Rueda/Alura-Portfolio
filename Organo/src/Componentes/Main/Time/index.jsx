import Card from '../Card'
import './style.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const styles_h1 = {
        borderBottom: '5px solid' + props.corprimaria
    }
    const styles_section = {
        backgroundColor: props.corsecundaria
    }

    function mudarcor(cor) {
        props.setTimes(prevValue => {
            return prevValue.map(time => {
                if (time.id == props.id) {
                    time.corsecundaria = hexToRgba(cor, 0.5)
                    time.corprimaria = cor
                }
                return time
            })
        })
    }

    return (
        props.cards.length > 0 && <section style={styles_section} className={props.nome.replace(' ', '').toLowerCase() + " cards_section"}>
            <input type="color" className="input_cor" value={props.corsecundaria} onChange={(e) => mudarcor(e.target.value)}/>
            <h1 style={styles_h1}>{props.nome}</h1>
            <div className="cards_container">
            {props.cards.map(card => {
                return <Card card={card} cards={props.cards} cor={props.corprimaria} key={card.id} nome={card.nome} imagem={card.imagem} cargo={card.cargo} deletar={props.deletar}/>
            })}
            </div>
        </section>
    )
}

export default Time