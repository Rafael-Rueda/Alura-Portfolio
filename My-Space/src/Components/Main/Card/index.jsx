import { useEffect } from 'react';
import styles from './styles/card.module.scss'

export function Card(props) { 

  function expandir(target) {
      const imagem = target.parentNode.previousSibling
      imagem.className = imagem.className + ' ' + styles.exibir;

      const overlay = document.getElementById('overlay_page')
      overlay.style.display = 'block'

      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0);
  }

  function esconder(target) {
    const imagem = target.parentNode
    imagem.className = styles.expansoes

    const overlay = document.getElementById('overlay_page')
    overlay.style.display = 'none'

    document.body.style.overflow = 'scroll'
  }

  let cards_display = props.cards.map(card => {
      return (
          <div key={card.id} className={props.popular && styles.popular}>

            <div className={styles.expansoes}>

              <div onClick={(e) => esconder(e.target)} className={styles.fechar}>X</div>

              <a type="image/png" download="Rectangle_6_9.png" href={card.img} className={styles.download}>&#8681;</a>

              <img alt={"Imagem de um astro"} src={card.img} className={styles.expandido} />
            </div>


            
            {props.popular ? 
            <div onClick={(e) => expandir(e.target)} className={styles.card  + styles.popular} >
                <img data-tipo={card.tipo} alt={"Imagem de um astro"} src={card.img} />
            </div> :
            
            <div onClick={(e) => expandir(e.target)} className={styles.card} >
                <p>{card.tipo}</p>
                <img data-tipo={card.tipo} alt={"Imagem de um astro"} src={card.img} />
                <p style={{textAlign: 'left'}}><small>Clique para ver !</small></p>
            </div>
            
            }
            

          </div>
      )
  })
  return (
    <>
      {cards_display}
    </>
  )
}
