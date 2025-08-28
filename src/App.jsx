import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componets/pages/Home'
import About from './componets/pages/About'
import Header from './componets/Header'
import Footer from './componets/Footer'



function App() {
  return (
  <>
  <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
    </Routes>
    <Footer/>
  </>
        )
}

export default App
