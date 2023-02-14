import { useEffect } from "react";
import { Card } from "./Card";
import styles from './main.module.scss'
import apijson from '../../Common/Data.json'

export function Main() {

  //Fetch da API
  useEffect(() => {
    
  }, [])

  
  return (
    <>
    <div className={styles.cards}>
      {apijson.map(filme => {
        return (
          <Card key={filme.id} id={filme.id} titulo={filme.titulo} img={filme.capa} sinopse={filme.descricao}/>
        )
      })}
    </div>
    </>
  )
}
