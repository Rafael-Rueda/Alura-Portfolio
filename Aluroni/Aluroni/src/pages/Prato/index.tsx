import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import styles from './prato.module.scss';
import cardapio from 'data/itens.json';
import TagsPrato from 'Components/TagsPrato';
import { Prato as PratoType} from 'types/Prato';
import NotFound from 'pages/NotFound';
import Header from 'Components/Header';

export default function Prato() {

  //   const { state } = useLocation();
  //   const { prato } = state as {prato: typeof cardapio[0]};
  const params = useParams();
  const prato = cardapio.find(item => item.id === Number(params.id));

  if (!prato) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='*' element={<><Header></Header></>}>
        <Route index element={
          <div>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container }>
              <h1 className={styles.titulo}>{prato.title}</h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title}/>
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>{prato.description}</p>
              </div>
              <TagsPrato {...prato as PratoType}/>
            </section>
          </div>
        }/>        
      </Route>
    </Routes>
  );
}
