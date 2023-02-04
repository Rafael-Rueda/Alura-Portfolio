import banner from '../../../Images/banner.png'
import styles from './styles/banner.module.scss'


export function Banner() {
    return (
        <div className={styles.banner}>
            <p>A galeria mais completa do espaço</p>
            <img alt="banner" src={banner}/>
        </div>
    )
}