import { createContext, useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export const FavoritoContext = createContext();
FavoritoContext.displayName = 'Favorito'

export const FavoritoProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritoContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritoContext.Provider>
    )
}

export const Favorito = ({className, animation, id, ligado}) => {
    const [favoritado, setFavoritado] = useState(false);

    useEffect(() => {
        if (ligado) {
            setFavoritado(true);
        }
    },[setFavoritado])

    const {favoritos, setFavoritos} = useContext(FavoritoContext);

    return (
        <>
            {favoritado ? 
            <AiFillHeart style={{ color: 'white', fill: 'red' }} size={35} className={`${className} ${animation}`} onClick={() => {
                setFavoritado(prev => !prev); 
                setFavoritos(prevValue => {return prevValue.filter(e => e != id)});
                }} /> 
            : 
            <AiOutlineHeart style={{ color: 'white' }} size={35} className={className} onClick={() => {
                setFavoritado(prev => !prev); 
                setFavoritos(prevValue => {return [...prevValue, id]});
                }} />
            }
        </>
    )
}
