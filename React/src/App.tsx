import Formulario from "./Components/Formulario";
import styles from "./app.module.scss"
import Tarefas from "./Components/Tarefas";
import { TarefasProvider } from "./Common/Tarefas";
import { InputValueProvider } from "./Common/Formulario";
import { SelecionarProvider } from "./Common/Selecionar";

function App() {

  return (
    <div className={styles.container}>
      <TarefasProvider>
      <SelecionarProvider>

        <InputValueProvider>
          <Formulario inputs={[{
            name: 'estudo', 
            id: 0, 
            placeholder: 'Adicione um novo estudo.', 
            type: 'text'
          }, 
            
            {name: 'tempo', 
            id: 1, 
            type: 'time'
            }]}/>
        </InputValueProvider>
        
        <Tarefas></Tarefas>
        
      </SelecionarProvider>
      </TarefasProvider>
    </div>
  );
}

export default App;
