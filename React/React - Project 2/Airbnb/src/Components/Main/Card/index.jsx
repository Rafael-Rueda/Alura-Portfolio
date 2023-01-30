export default function Card(props) {
    return (
        <div className='card'>
            {props.status == 'sold' ? <p>Sold out</p> : <p>Online</p>}
            <img className="card_img" src={props.src} />
            <div>
                <img src="Star 1.png"></img>
                <p>{props.rating.rate} <span>({props.rating.num}) {props.rating.st}</span></p>
            </div>
            <p>{props.title}</p> 
            <p><strong>From ${props.$value}</strong> / person</p>
        </div>
    )
}