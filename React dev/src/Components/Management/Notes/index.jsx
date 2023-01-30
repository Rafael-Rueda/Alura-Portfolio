import { useEffect } from "react"
import { useState } from "react"

export function Notes(props) { 
    return (
        <section id="notes-management">
        
            {/*Notes here*/}
            {props.notes.map(obj => {
                return <div key={obj.index}>{obj.valor(obj.index, obj.selecionado)}</div>
            })}

        </section>
    )
}