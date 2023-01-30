function Header() {
    return (
        <header>
        <nav className="navbar">
            <img width="40px" src="./react-logo.png" alt="Logo"/>
            <ul className="nav__ul">
                <li>Pricing</li>    
                <li>About</li>    
                <li>Contact</li>    
            </ul>
        </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className = "main__ul">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps.</li>
            </ul>
        </main>
    )
}

function Page() {
    return (
    <div>
        <Header />
        <MainContent />
    </div>
    )
}

ReactDOM.render(<Page />,document.getElementById('root'))