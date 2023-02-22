import { SelecionarContext } from '../../Common/Selecionar';
import { useContext } from 'react'
import styles from './cronometro.module.scss'

function Cronometro() {

  const { selecionar } = useContext(SelecionarContext)

  return (
    <div>
      <p className={styles.p}>
        <div>
          {selecionar.time.split(':').map((num, index) => {
            return (
              <>
                <span className={styles.span}>{num.split('')[0]}</span>
                <span className={styles.span}>{num.split('')[1]}</span>
                {(index === 0 || index === 1) && <span className={styles.span}>:</span>}
              </>
            )
          })}
        </div>
      </p>
    </div>
  )
}

export default Cronometro;
