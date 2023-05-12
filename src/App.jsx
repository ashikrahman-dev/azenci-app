
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  // const [count, setCount] = useState(2)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='*' element={ <h1>Page not found!</h1> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
