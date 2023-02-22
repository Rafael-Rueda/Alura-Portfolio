import {useContext, useRef} from 'react'
import { Input } from '../../Types/Input';
import { Tarefa } from '../../Types/Tarefa';
import { InputValueContext } from '../Formulario';
import { TarefasContext } from '../Tarefas'

export const useBotaoTarefa = () => {
    const {setTarefas} = useContext(TarefasContext);
    const {inputvalue, setInputvalue} = useContext(InputValueContext);
    const tarefacount = useRef(0);

    function enviar() {
        const values = inputvalue.reduce((acc: Tarefa, obj: Input, index: number) => {
            if (obj.id === 0) {
                return {
                    ...acc, name: obj.value, id: tarefacount.current
                }
            } else if(obj.id === 1) {
                return {
                    ...acc, time: obj.value, id: tarefacount.current
                }
            }
            return {...acc, id: tarefacount.current}
        }, {} as Tarefa)

        if (!inputvalue.some(obj => obj.value === '') && inputvalue.length === 2) {
            
            tarefacount.current = tarefacount.current + 1
            
            setTarefas(prevValue => {
                return [...prevValue, values]
            })

        } else {
            alert('Digite valores válidos !')
        }
   
    }

    function limpar() {
        setInputvalue([])
    }

    return {enviar, limpar}
}
