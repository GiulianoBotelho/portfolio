import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Inicio from './components/inicio.jsx'
import Sobre from './components/sobre.jsx'
import Projetos from './components/projetos.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,28,1) 57%, rgba(9,9,121,1) 300%);
    /* background-color: #002C3D; */
    font-family: 'Cormorant SC', serif;
    font-family: 'Titillium Web', sans-serif;
    color: #FFE482;

  }
  
::-webkit-scrollbar {
    width: 10px;
}


::-webkit-scrollbar-track {
    background: transparent;
}


::-webkit-scrollbar-thumb {
    background: transparent;
    border: solid 1px;
}

::-webkit-scrollbar-thumb:hover {
    background: transparent;
}
`
const CaixaNome = styled.article`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
z-index: -1;
overflow: hidden;
@media (max-width:600px){
  font-size: 4rem;
  width: 99vw;
  overflow-x: hidden;                                                      
}

`
const Nome = styled(motion.p)`
font-size: 15rem;
opacity: 0.2;
color: whitesmoke;
font-family: 'Playfair Display', serif;
@media (max-width:600px){
  font-size: 8rem;

 
  }
`
function App() {
  const variants = {
    animate:{
      x:["150%", "-150%"],
      transition:{
        x:{
          repeat:Infinity,
          repeatType:"loop",
          duration:12,

        }
      }
    }
  }
  return (
    <>
      <GlobalCSS />
      <CaixaNome>
        <Nome  variants={variants}  animate="animate" >
          Giuliano Botelho
        </Nome>
      </CaixaNome>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='Sobre' element={<Sobre />} />
          <Route path='Projetos' element={<Projetos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
