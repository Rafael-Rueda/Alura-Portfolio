import './style.css'
import { BsFillTrashFill } from 'react-icons/bs'

const Card = (props) => {

    const styles_cor = {
        background: 'linear-gradient(to bottom,' + props.cor + ' 0,' + props.cor + ' 90px, white 90px, white 100%)'
    }

    return (
        <div className="card" style={styles_cor}>
            <div 
            className="deletar_card" 
            onClick={(e) => props.deletar(props.cards.map(card => {return card.id
            }).filter(id => {return id == props.card.id})
            )}>
            <BsFillTrashFill />
            </div>
            <img src={props.imagem}/>
            <h3>{props.nome}</h3>
            <p>{props.cargo}</p>
        </div>
    )
}

export default Card