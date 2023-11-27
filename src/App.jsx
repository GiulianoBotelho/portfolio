import { useState } from 'react'
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
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,28,1) 57%, rgba(9,9,121,1) 300%); */
    background-color: #002C3D;
    font-family: 'Cormorant SC', serif;
    font-family: 'Titillium Web', sans-serif;
    color: #FFE482;

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

`
const Nome = styled(motion.p)`
font-size: 15rem;
opacity: 0.1;
color: whitesmoke;
font-family: 'Playfair Display', serif;
`
function App() {
  return (
    <>
      <GlobalCSS />
      <CaixaNome>
        <Nome
          initial={{x:"90%"}}
          animate={{x:"-50%"}}
          transition={{repeat:Infinity, duration: 15, repeatType:'mirror'}}
  
        >
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
