import {useContext} from 'react'
import { SelecionarContext } from '../../Common/Selecionar';
import { TarefasContext } from '../../Common/Tarefas';
import styles from './tarefas.module.scss'

function Tarefas() {

    const {tarefas} = useContext(TarefasContext);
    const {selecionar, setSelecionar} = useContext(SelecionarContext);

  return (
    <div className={styles.tarefas}>
      {tarefas.map(tarefa => {
        return (
          <div key={tarefa.id} className={selecionar !== tarefa ? styles.tarefa : styles.tarefaselecionado} onClick={() => setSelecionar(tarefa)}>
            <h3>{tarefa.name}</h3>
            <p>{tarefa.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tarefas