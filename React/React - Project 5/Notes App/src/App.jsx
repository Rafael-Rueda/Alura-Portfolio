import Management from './Components/Management'
import DataText from './Components/DataText'
import { useEffect, useState } from 'react'
import './styles/styles.css'

function App() {

  function selecionar(index) {
    setIndex(index)
    setNote(prevValue => {
        return [
            ...prevValue.map(obj => {
                obj.selecionado = false
                if(obj.index == index) {
                    obj.selecionado = true
                    setTextArea(obj.conteudo)
                }
                return obj
            })
        ]
    })
}

  const [notes, setNote] = useState( 
    
    JSON.parse(localStorage.getItem("notes")) &&

    [
      ...JSON.parse(localStorage.getItem("notes")).map(obj => {
      obj.valor = (index, selecionado) => {return <p 
        style={{color: selecionado ? 'white' : 'black', backgroundColor: selecionado ? '#4A4E74' : 'transparent'}} 
        onClick={() => {selecionar(index)}} 
        className="note">Note {index}</p>}
  
        return obj})
    ] 
    
    ||
  
    []
    )
  
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0)
  const [index, setIndex] = useState(undefined)
  const [textarea, setTextArea] = useState(JSON.parse(localStorage.getItem("textarea")) || '### Create a new note !')

  useEffect(function() {
    localStorage.setItem("notes", JSON.stringify(notes))
    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("textarea", JSON.stringify(textarea))
  }, [notes])

  return (
    <main>

    <Management 
    notes={notes} 
    setNote={setNote} 
    index={index} 
    setIndex={setIndex}
    setTextArea={setTextArea}
    selecionar={selecionar} 
    count={count}
    setCount={setCount} />

    <DataText 
    notes={notes} 
    setNote={setNote} 
    index={index}
    textarea={textarea}
    setTextArea={setTextArea} />

    </main>
  )
}

export default App
