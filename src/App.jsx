
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Error404 from './pages/Error404/Error404'

function App() {
  // const [count, setCount] = useState(2)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='*' element={ <Error404 /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
