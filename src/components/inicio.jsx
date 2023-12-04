import React from 'react'
import { Intro } from './Estilos/Estilo-Inicio.jsx'
import Giphy from '../assets/Imagens/giphy.gif'
import { IniImg } from './Estilos/Estilo-Inicio.jsx'
import { ImgTexto } from './Estilos/Estilo-Inicio.jsx'
import { motion } from 'framer-motion'

export default function Inicio() {
   const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <>
      <Intro

      >
        <motion.figure
         className="container"
         variants={container}
         initial="hidden"
         animate="visible"
        >
          <IniImg
          className="item" variants={item}
            src={Giphy} alt="" />
          <ImgTexto
          className="item" variants={item}
          

          >Bem vindo ao meu portfólio!</ImgTexto>
        </motion.figure>
      </Intro>
    </>
  )
}
