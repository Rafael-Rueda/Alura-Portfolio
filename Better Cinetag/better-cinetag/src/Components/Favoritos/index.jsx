import { useContext } from 'react'
import apijson from '../../Common/Data.json'
import { FavoritoContext } from '../../Common/Favorito'
import { Card } from '../Main/Card'
import styles from './favoritos.module.scss'

export function Favoritos() {

    const { favoritos, setFavoritos } = useContext(FavoritoContext)

    console.log(favoritos)
    
    const filmes = apijson.filter((filme, index) => {

        return favoritos.includes(filme.id)
        
    })
    console.log(filmes)

  return (
    <div className={styles.cards}>
      {filmes.map(filme => {
        return (
            <Card key={filme.id} id={filme.id} titulo={filme.titulo} img={filme.capa} sinopse={filme.descricao}/>
        )
      })}
    </div>
  )
}
