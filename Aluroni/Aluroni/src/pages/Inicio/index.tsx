import styles from './inicio.module.scss';
import stylesTema from 'Styles/tema.module.scss';
import cardapio from 'data/itens.json';
import CasaAluroni from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export function Inicio() {
  const displayrecomendados = [...cardapio].sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionar(prato: Prato) {
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>

        {displayrecomendados.map(item => {
          return (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao} onClick={() => redirecionar(item)}>Ver mais</button>
            </div>
          );
        })};

      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={CasaAluroni} alt="Casa Aluroni"/>
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}