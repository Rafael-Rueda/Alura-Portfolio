import styles from './HomePage.module.css'
import jsoncard from '../../assets/json/posts.json'
import { Card } from '../Card'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <ul className={styles.posts}>
           {jsoncard.map(card => {
            return (
                <Link key={card.id} to={`posts/${card.id}`}>
                <li>
                    <Card card={card}/>
                </li>
                </Link>
            )
           })}
        </ul>
    )
}