import './styles.css'
export default function Main(props) {
    const styles_main = {
        backgroundColor: props.darkMode ? '#282D35' : '#FFFFFF',
        color: props.darkMode ? '#DEEBF8' : '#2B283A',
        transition: '0.5s'
    }

    const styles_h1 = {
        color: props.darkMode ? 'white' : '#2B283A',
        transition: '0.5s'
    }
    return (
        <main style={styles_main}>
            <h1 style={styles_h1}>
                Fun facts about React
            </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src="reactjs-icon 2.png"></img>
        </main>
    )
}