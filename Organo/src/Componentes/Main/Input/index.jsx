export function Input(props) {

    let tipo = 'text'
    if (props.type == 'text') {
        tipo = 'text'
    } else if(props.type == 'image') {
        tipo = 'text'
    }



    // Label
    let $nome_label = ''
    for(let c = 1; c < props.name.length ; c++) {
        $nome_label += props.name[c]
    }
    const label = (props.name[0].toUpperCase()) + $nome_label

    let $nome = ''
    let $cargo = ''
    let $imagem = ''
    let $time = 'frontend'

    function salvar(e) {
        props.setCard(prevValue => {
            switch(e.target.name) {
                case 'nome':
                    $nome = e.target.value
                    return {
                        ...prevValue, nome: $nome
                    }
                case 'cargo':
                    $cargo = e.target.value
                    return {
                        ...prevValue, cargo: $cargo
                    }
                case 'imagem':
                    $imagem = e.target.value
                    return {
                        ...prevValue, imagem: $imagem
                    }
                case 'time':
                    $time = e.target.value
                    return {
                        ...prevValue, time: $time
                    }
                default:
                    break;
            }

            return {}
        })
    }

    return (
        <div className="input">
            <label htmlFor={props.name}>{label}</label>
            {props.type == 'select' 

            ? 
            <select name={props.name} onChange={(e) => salvar(e)}>
                {props.value.map(valor => {
                    const $valor = (valor.replace(' ', '')).toLowerCase()
                    return <option key={valor} value={$valor}>{valor}</option>
                })}
            </select> 

            : 
            <input onChange={(e) => salvar(e)}
            id={props.name} name={props.name} type={tipo} placeholder={props.value}/>}
        </div>
    )
}