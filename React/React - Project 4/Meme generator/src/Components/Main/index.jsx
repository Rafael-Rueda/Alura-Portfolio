import './styles.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Main() {

    const [memesdata, setMemesData] = useState('[]')

    useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => {return res.json()})
            .then(data => {setMemesData(data)
            })
    }, [])

    const [meme, setMeme] = useState({img: 'https://i.imgflip.com/2ji8hx.jpg', text1: '', text2: ''})
    // const [text1, setText1] = useState("")
    // const [text2, setText2] = useState("")

    function clicou(e) {
        e.preventDefault()
        const $url = memesdata.data.memes[Math.floor(Math.random() * memesdata.data.memes.length)].url

        setMeme(function(prevValue) {
            return {
                ...prevValue,
                img: $url
        }
        
        })
        
        

        // setText1(function() {
        //     return <h1>{document.getElementById('first_p').value}</h1>
        // })

        // setText2(function() {
        //     return <h1>{document.getElementById('second_p').value}</h1>
        // })
    }

    function handleChange(event) {
        setMeme(prevValue => {
            const [name, value] = [event.target.name, event.target.value]
            return {...prevValue,
            [name]: value
        }
        })
    }
    
    return (
        <main>
            <form>
                <input onChange={handleChange} name="text1" id="first_p" type="text" placeholder="First phrase" value={meme.text1}></input>
                <input onChange={handleChange} name="text2" id="second_p" type="text" placeholder="Second phrase" value={meme.text2}></input>
                <button onClick={clicou} id="submit_main">Generate a Meme !</button>
            </form>
            <div id="meme">
            <h1>{meme.text1}</h1>
                <img src={meme.img} />
            <h1>{meme.text2}</h1>
            </div>
        </main>
    )
}
