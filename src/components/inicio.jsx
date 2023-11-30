import React from 'react'
import { Intro } from './Estilos/style.jsx'
import Giphy from '../assets/Imagens/giphy.gif'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IniImg = styled(motion.img) `
cursor: pointer;
border-radius: 15%;
opacity: 0.8;
border: solid 2px;
box-shadow: 1px 2px 2px 2px black;
@media (max-width:600px){
  width: 100%;
}
`
export const ImgTexto = styled(motion.figcaption)`
font-size: 2rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:600px){
}
`
export default function Inicio() {
  return (
    <>
      <Intro
  
      >
        <figure>
          <IniImg  initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, x: 0, }}
        transition={{ duration: 4 }}
           src={Giphy} alt="" />
          <ImgTexto
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:3, delay:2}}
          
          >Bem vindo ao meu portfólio!</ImgTexto>
        </figure>
      </Intro>
    </>
  )
}
