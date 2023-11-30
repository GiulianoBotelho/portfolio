import React from 'react'
import { Intro } from './Estilos/Estilo-Inicio.jsx'
import Giphy from '../assets/Imagens/giphy.gif'
import { IniImg } from './Estilos/Estilo-Inicio.jsx'
import { ImgTexto } from './Estilos/Estilo-Inicio.jsx'

export default function Inicio() {
  return (
    <>
      <Intro

      >
        <figure>
          <IniImg initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, x: 0, }}
            transition={{ duration: 4 }}
            src={Giphy} alt="" />
          <ImgTexto
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2 }}

          >Bem vindo ao meu portfólio!</ImgTexto>
        </figure>
      </Intro>
    </>
  )
}
