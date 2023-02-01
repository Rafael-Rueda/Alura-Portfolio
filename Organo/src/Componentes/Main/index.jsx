import './styles/style.css'
import { Input } from './Input'
import { useEffect, useState } from 'react'
import Time from './Time'

export function Main() {

    const [times, setTimes] = useState([
        {
            nome: 'Frontend',
            corprimaria: '#82CFFA',
            corsecundaria: '#E8F8FF',
            id: 'frontend'
        },
        {
            nome: 'UX Design',
            corprimaria: '#DB6EBF',
            corsecundaria: '#FAE9F5',
            id: 'uxdesign'
        },
        {
            nome: 'Programação',
            corprimaria: '#57C278',
            corsecundaria: '#D9F7E9',
            id: 'programação'
        }
    ])


    const [card, setCard] = useState({nome: '', cargo: '', imagem: '', time: 'frontend'})
    const [cards, setCards] = useState([])

    const [count, setCount] = useState(0)

    function checarinputs() {
        const $inputnome = document.getElementById('nome')
        if ($inputnome.value) {
            return true
        } else {
            alert('Digite um nome válido !')
            return false
        }
    }

    function enviar() {
        if(checarinputs()) {
            setCards(prevValue => {
                return [...prevValue, {...card, id: count}]
            })
        }
        
        setCount(prevValue => {
            return prevValue + 1
        })
    }

    return (
    <main>
        <div className="form">    
        <h1>Preencha os dados para criar o card do colaborador.</h1>
            <Input card={card} setCard={setCard}
            type="text" value="Digite o seu nome" name="nome"/>
            <Input card={card} setCard={setCard}
            type="text" value="Digite o seu cargo" name="cargo"/>
            <Input card={card} setCard={setCard}
            type="image" value="Informe o endereço da imagem" name="imagem"/>
            <Input card={card} setCard={setCard}
            type="select" value={times.map(time => time.nome)} name="time"/>

            <button onClick={enviar}>Criar card</button>
        </div>
        <div className="colaboradores">
            {times.map(time => {
                return (
                <Time 
                key={time.id}
                nome={time.nome} 
                corprimaria={time.corprimaria} 
                corsecundaria={time.corsecundaria}
                cards={cards.filter(card => {
                    return card.time === time.id
                })}
                />
                )
            }
            )}   
        </div>
    </main>
    )
}