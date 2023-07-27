import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Home from '../src/pages/Home'
import Forum from './pages/Forum'
import Contato from './pages/Contato'
import Footer from './components/Footer'
import Sobre from './pages/Sobre'

const Router = () => {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/sobre' element= {<Sobre />} />
            <Route path='/forum' element= {<Forum />} />
            <Route path='/contato' element= {<Contato />} />
        </Routes>
        <Footer content="Feito com ♡ por Anna Miranda" />
    </BrowserRouter>
  )
}

export default Router