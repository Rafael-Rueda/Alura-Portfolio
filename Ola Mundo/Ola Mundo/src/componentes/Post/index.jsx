import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom'
import jsoncard from '../../assets/json/posts.json'
import { Card } from '../Card';

export function Post() {
    const $id = useParams();
    const post = jsoncard.find(post => post.id === Number($id.id))
    console.log(post)
    return (
        <div>
            <>
                <img width="100%" height="200px" src={`../../../src/assets/posts/${post.id}/capa.png`}></img>
                <h1>{post.titulo}</h1>
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </>
        </div>
    )
}
