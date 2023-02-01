import './style.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imagem}/>
            <h3>{props.nome}</h3>
            <p>{props.cargo}</p>
        </div>
    )
}

export default Card