import styles from './card.module.scss'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Favorito, FavoritoContext } from '../../../Common/Favorito';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

export function Card({id, img, titulo, descricao, sinopse}) {

    let trava = 1;
    function trocar() {
        if(trava) {
            document.getElementById(`card_p${id}`).style.cssText = 'z-index: 0;'
            trava = 0;
        } else {
            document.getElementById(`card_p${id}`).style.cssText = 'z-index: 1;'
            trava = 1;
        }
    }

    const ligado = useRef();
    const {favoritos} = useContext(FavoritoContext);

    if(favoritos.includes(id)) {
        ligado.current = true;
    } else {
        ligado.current = false;
    }
    

    return (
        <div className={styles.card}>
            <div id={`card_p${id}`} className={styles.principal}>
                <img src={img} />
                <div className={styles.main}>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                </div>
                <div onClick={trocar} className={styles.overlay}></div>

                <div className={styles.footer}>
                <p><Link to={`filmes/${id}`}>Ver mais</Link></p>
                <Favorito id={id} className={styles.favorito} animation={styles.animation} ligado={ligado.current}/>
                </div>
            </div>

            <div className={styles.secundario}>
                <h1>{titulo}</h1>
                <p>{sinopse}</p>
                <AiOutlineArrowLeft size={30} className={styles.voltar} onClick={trocar} />
            </div>
        </div>

    )
}
