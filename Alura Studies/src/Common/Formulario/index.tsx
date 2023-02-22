import {useState, createContext, SetStateAction, useContext} from 'react'
import { Input } from '../../Types/Input';

// inputvalue guardará os valores do input do formulario em um array de objetos, onde cada objeto é referente à um input e contém as propriedades id e value.

type InputContext = {
    inputvalue: Input[];
    setInputvalue: React.Dispatch<SetStateAction<Input[]>>
}

export const InputValueContext = createContext<InputContext>({
    inputvalue: [],
    setInputvalue: () => {}
});

export const InputValueProvider = (props: {children: React.ReactNode}) => {
    
    const [inputvalue, setInputvalue] = useState<Input[]>([]);

    /* Output do InputValueProvider */
    return (
        <InputValueContext.Provider value={{inputvalue, setInputvalue}}>
            {props.children}
        </InputValueContext.Provider>
    )
}

export const useInputChange = (): {mudar: (id: number, value: string) => void} => {
    
    const {setInputvalue} = useContext(InputValueContext);

    function mudar(id: number, value: string): void {

        setInputvalue(prevValue => {
            if((prevValue.filter(obj => {return obj.id === id})).length) {
                return prevValue.map(valor => {
                    if (valor.id === id) {
                        valor.value = value;
                    }
                    return valor;
                })
            } else {
                return [...prevValue, {id: id, value: value}]
            }
        });
    }

    return {mudar}


}