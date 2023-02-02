import './styles/style.css'
import { Input } from './Input'
import { useEffect, useState } from 'react'
import Time from './Time'
import { v4 as uuidv4 } from 'uuid';

export function Main() {

    const [times, setTimes] = useState([
        {
            nome: 'Frontend',
            corprimaria: '#82CFFA',
            corsecundaria: '#E8F8FF',
            time: 'frontend',
            id: uuidv4()
        },
        {
            nome: 'UX Design',
            corprimaria: '#DB6EBF',
            corsecundaria: '#FAE9F5',
            time: 'uxdesign',
            id: uuidv4()
        },
        {
            nome: 'Programação',
            corprimaria: '#57C278',
            corsecundaria: '#D9F7E9',
            time: 'programação',
            id: uuidv4()
        }
    ])


    const [card, setCard] = useState({nome: '', cargo: '', imagem: '', time: 'frontend'})
    const [cards, setCards] = useState([])

    const [count, setCount] = useState(0)

    function checarinputs() {
        const $inputnome = document.getElementById('nome')
        const $inputimagem = document.getElementById('imagem')
        const RegExp = /^https:\/\/[\w]*/

        if ($inputnome.value && RegExp.test($inputimagem.value)) {
            return true
        } else {
            alert('Digite informações válidas !')
            return false
        }
    }

    function enviar(e) {
        e.preventDefault()
        if(checarinputs()) {
            setCards(prevValue => {
                return [...prevValue, {...card, id: count}]
            })
        }
        
        setCount(prevValue => {
            return prevValue + 1
        })
    }

    function deletar(id) {
        setCards(prevValue => {
            return prevValue.filter(card => {
                return card.id != id
            })
        })
    }

    function criartime(e, nome) {
        e.preventDefault()
        setTimes(prevValue => {
            return [...prevValue, 
                {
                nome: nome,
                corprimaria: '#DB6EBF',
                corsecundaria: '#FAE9F5',
                time: nome.replace(' ', '').toLowerCase(),
                id: uuidv4()
                }
            ]
        })
    }

    return (
    <main>
        <form className="form">    
        <h1>Preencha os dados para criar o card do colaborador.</h1>
            <Input card={card} setCard={setCard}
            type="text" value="Digite o seu nome" name="nome"/>
            <Input card={card} setCard={setCard}
            type="text" value="Digite o seu cargo" name="cargo"/>
            <Input card={card} setCard={setCard}
            type="image" value="Informe o endereço da imagem" name="imagem"/>
            <Input card={card} setCard={setCard}
            type="select" value={times.map(time => time.nome)} name="time"/>

            <button onClick={(e) => enviar(e)}>Criar card</button>
        </form>

        <form className="form">    
        <h1>Preencha os dados para criar um novo time</h1>
            <Input card={card} setCard={setCard}
            type="text" value="Digite o nome do time" name="nome"/>
            <button onClick={(e) => {criartime(e, card.nome)}}>Criar time</button>
        </form>

        <div className="colaboradores">
            {times.map(time => {
                return (
                <Time 
                key={time.id}
                id={time.id}
                nome={time.nome} 
                corprimaria={time.corprimaria} 
                corsecundaria={time.corsecundaria}
                cards={cards.filter(card => {
                    return card.time === time.time
                })}
                deletar={deletar}
                setTimes={setTimes}
                />
                )
            }
            )}   
        </div>
    </main>
    )
}