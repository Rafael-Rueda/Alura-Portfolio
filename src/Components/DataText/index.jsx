import './styles/styles.css'
export default function DataText(props) {

    function salvar(index) {
        const textarea = document.getElementById('textarea')

        props.setTextArea(textarea.value)

        props.setNote(prevValue => {
            return [...prevValue.map(obj => {
                if(obj.index == index) {
                    obj.conteudo = textarea.value
                }
                return obj
            })]
        })
    }

    function clicouestilo(event) {
        if (event.target.id == 'title') {
            props.setTextArea(prevValue => {
                return ('### ' + prevValue)
            })
        } else if (event.target.id == 'bold') {
            props.setTextArea(prevValue => {
                return ('**' + prevValue + '**')
            })
        } else if (event.target.id == 'italic') {
            props.setTextArea(prevValue => {
                return ('*' + prevValue + '*')
            })
        } else if (event.target.id == 'scratched') {
            props.setTextArea(prevValue => {
                return ('~~' + prevValue + '~~')
            })
        }
    }

    return (
       <section id="DataText">
        <header>
            <div className="controls-1 controls">
                <button>Write</button>
                <button>Preview</button>
                <button id="title" onClick={clicouestilo} className="oneletter">H</button>
                <button id="bold" onClick={clicouestilo} className="oneletter">B</button>
                <button id="italic" onClick={clicouestilo} className="oneletter">I</button>
                <button id="scratched" onClick={clicouestilo} className="oneletter">S</button>
                
            </div>
            <div className="controls-2 controls">
               <button><img src="link.png" width="20px"/></button>
               <button><img src="quotation-mark.png" width="20px"/></button>
               <button><img src="html.png" width="20px"/></button>
               <button><img src="photo.png" width="20px"/></button>
            </div>
        </header>
        <section>
            <textarea value={props.textarea} id="textarea" onChange={() => salvar(props.index)}></textarea>
        </section>
       </section> 
    )
}