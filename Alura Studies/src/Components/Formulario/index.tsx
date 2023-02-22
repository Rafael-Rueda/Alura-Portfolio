import { useBotaoTarefa } from "../../Common/Botao"
import { useInputChange } from "../../Common/Formulario";
import { form } from "../../Types/Formulario"
import Button from "../Botao"
import Cronometro from "../Cronometro";
import styles from "./formulario.module.scss"

import {useContext} from 'react'
import { InputValueContext } from "../../Common/Formulario/index"


function Formulario({inputs}: form) {
  
  const {inputvalue} = useContext(InputValueContext);
  const {mudar} = useInputChange();
  const {enviar, limpar} = useBotaoTarefa();

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
      {inputs.map(input => {

        let valor = '';
          if(input.type === 'time') {
            if (inputvalue.filter(item => item.id === 1)[0]) {
              valor = inputvalue.filter(item => item.id === 1)[0].value
            }
          } else if(input.type === 'text') {
            if (inputvalue.filter(item => item.id === 0)[0]) {
              valor = inputvalue.filter(item => item.id === 0)[0].value
            }
          }
      
        
        return (
          <div className={styles.inputlabel} key={input.id}>
            <label htmlFor={(input.id).toString()}> {input.name.toUpperCase()} </label>

            <input required
            onChange={(e) => mudar(input.id, e.target.value)} 
            value={valor}
            name={input.name} 
            id={(input.id).toString()} 
            type={input.type} 
            {...input.type === 'time' ? {step: 1} : {}}
            {...input.placeholder ? {placeholder: input.placeholder} : {}}>
            </input>

          </div>
      )})}
      </div>
      <div className={styles.botoes}>
      <Button type='submit' onClick={() => {enviar(); limpar()}}>Adicionar</Button>
      <Button type='button' > Começar tarefa</Button>
      </div>
      <Cronometro />


    </form>
  )
}

export default Formulario