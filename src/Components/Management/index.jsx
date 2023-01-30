import './styles/styles.css'
import { Notes } from './Notes'
import { useEffect, useState } from 'react'
export default function Management(props) {

    function addNote() {
        props.setCount(prevValue => {
            return prevValue + 1
        })
        props.setNote(prevValue => {
            return [...prevValue, 
            {
                index: (props.count), 

                selecionado: false,

                valor:(index, selecionado) => {return <p 
                style={{color: selecionado ? 'white' : 'black', backgroundColor: selecionado ? '#4A4E74' : 'transparent'}} 
                onClick={() => {props.selecionar(index)}} 
                className="note">Note {index}</p>},

                conteudo: '### Type something here...'
            }]
        })
        props.selecionar(props.count)
    }

    function removeNote(index) {
        props.setNote(prevValue => {
            return [...prevValue.filter((obj) => {
                if (obj.index != index) {
                    return obj
                }
            })
            ]
        })
    }

    return (
       <section id="management">

        <header id="header-management">
            <h1>Notes</h1>
            <button onClick={addNote}>+</button>
            <button onClick={() => {removeNote(props.index)}}>-</button>
        </header>

        <Notes notes={props.notes}/>

       </section> 
    )
}

