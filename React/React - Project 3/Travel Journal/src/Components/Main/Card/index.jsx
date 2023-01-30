import './cardstyles.css'
export default function Card(props) {
    return (
        <div class="card">
            <img src={props.img} />
            <div class="card_container">
                <div>
                    <img src="Fill 219.svg" />
                    <h3>{(props.loc).toUpperCase()}</h3>
                    <a href="https://google.com">{'View on Google Maps'}</a>
                </div>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <p class="cards_date">{props.date}</p>
                </div>
                <div>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}