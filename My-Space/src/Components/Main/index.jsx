import { useEffect, useState } from 'react'
import styles from './styles/main.module.scss'
import { Card } from './Card';

export function Main() {

    const [cards, setCards] = useState([]);

    async function fetchapi() {
        const $cards = await ((await fetch("https://my-space-restapi.netlify.app/my-space.json")).json())
        return $cards
    }

    useEffect(() => {
        fetchapi().then(data => setCards(Object.values(data.Cards)))
    }, [])

    const [cards_display, setCDisplay] = useState([]) 

    useEffect(() => {
        setCDisplay(cards) 
    }, [cards])

    function filtro(e) {
        const tags = new Set(cards.map(card => card.tipo))

        switch(e.target.id) {
            case '$galaxias':
                return cards.filter(card => Array.from(tags).some(value => {
                    if (value === card.tipo && card.tipo == 'galaxia') {
                        return card
                    }
                }))
            case '$estrelas':
                return cards.filter(card => card.tipo == 'estrela')
            case '$lua':
                return cards.filter(card => card.tipo == 'lua')
            case '$nebulosas':
                return cards.filter(card => card.tipo == 'nebulosa')
            case '$todas':
                return cards.filter(card => card)
            default:
                break;
        }
    }

  return (
    <>
        <main className={styles.main}>
            <h1 className={styles.h1}>Navegue pela galeria</h1>
            <div className={styles.filtro}>
                <p>Filtre por tags:</p>
                <ul>
                    <li onClick={(e) => setCDisplay(filtro(e))} id="$galaxias">Galáxias</li>
                    <li onClick={(e) => setCDisplay(filtro(e))} id="$estrelas">Estrelas</li>
                    <li onClick={(e) => setCDisplay(filtro(e))} id="$lua">Lua</li>
                    <li onClick={(e) => setCDisplay(filtro(e))} id="$nebulosas">Nebulosas</li>
                    <li onClick={(e) => setCDisplay(filtro(e))} id="$todas">Todas</li>
                </ul>
            </div>
            <section className={styles.cards}>
                <Card cards={cards_display} />
            </section>
        
        </main>
        <aside className={styles.populares}>
            <h1>Populares</h1>
            <section className={styles.cards}>

            <Card popular={true} cards={cards.filter(card => card.popular)} />

            </section>
        </aside>
    </>
  )
}
