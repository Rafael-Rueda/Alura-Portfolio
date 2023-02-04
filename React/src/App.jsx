import './style.scss'
import '../fonts/gandhi-sans/GandhiSans-Regular.otf'
import { Header } from "./Components/Header"
import { Banner } from "./Components/Banner"
import { Main } from "./Components/Main"

function App() {

  return (
    <>
      <div id="overlay_page" className='overlay'></div>
      <Header />
      <Banner />
      <Main />
    </>
  )
}

export default App
