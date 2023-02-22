import { useContext } from 'react'
import { SelecionarContext } from "../Selecionar"
import { TarefasContext } from '../Tarefas';

export const useCronometro = (): { temposegundos: () => number, cronometrar: () => void } => {

    const { selecionar, setSelecionar } = useContext(SelecionarContext);
    const {setTarefas} = useContext(TarefasContext);

    const [$horas, $minutos, $segundos]: string[] = selecionar.time.split(':');
    const horas = parseInt($horas); const minutos = parseInt($minutos); const segundos = parseInt($segundos);

    function temposegundos(): number {
        const tempo: number = horas * 3600 + minutos * 60 + segundos;
        return tempo;
    }

    function cronometrar() {
        let tempo = temposegundos();
        let thoras = horas;
        let tminutos = minutos;
        let tsegundos = segundos;

        const $selecionar = selecionar;

        const intervalo = setInterval(() => {
            const $id = selecionar.id
            const $name = selecionar.name
            const temporizar = (): string => {

                if (tsegundos > 0) {
                    tsegundos = tsegundos - 1;
                } else if (tminutos > 0) {
                    tminutos = tminutos - 1;
                    tsegundos = 59;
                } else {
                    thoras = thoras - 1;
                    tminutos = 59;
                    tsegundos = 59;
                }

                tempo = tempo - 1

                return `${thoras.toString().length === 1 ? '0' + thoras : thoras}:${tminutos.toString().length === 1 ? '0' + tminutos : tminutos}:${tsegundos.toString().length === 1 ? '0' + tsegundos : tsegundos}`
            }

            setSelecionar({ id: $id, name: $name, time: temporizar() })

            if (tempo <= 0) {
                clearInterval(intervalo)
                setSelecionar({name: '', id: null, time: '00:00:00'})
                setTarefas(tarefa => {
                    return tarefa.filter(obj => obj !== $selecionar)
                })
                alert('Tarefa Concluida')
            }

        }, 1000)

    }

    return { temposegundos, cronometrar }
}