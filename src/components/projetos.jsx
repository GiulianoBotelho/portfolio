import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { Intro} from './Estilos/style.jsx'
import Calc from '../assets/projetos/calc.png'
import Coffeb from '../assets/projetos/coffeb.png'
import Contador from '../assets/projetos/contador.png'
import Elden from '../assets/projetos/elden-ring.png'
import Estacoes from '../assets/projetos/estacoes.png'
import Fantastika from '../assets/projetos/fantastika.png'
import Finn from '../assets/projetos/fin.png'
import Inverno from '../assets/projetos/inverno.png'
import Lamp from '../assets/projetos/lamp.png'
import Todo from '../assets/projetos/todo.png'

const FigProImg = styled.figure `
width: 35vw;
display: flex;
flex-wrap: wrap;
`

const ProImg = styled.img`
width: 35vw;

`

const ProSection = styled.section `
height: 90vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`
const FigTexto = styled.figcaption `
height: 12vh;
width: 35vw;
border: solid green;
`
export default function Projetos() {
  const [projeto,setProjeto] = useState(
    [
      {Imagem:Calc},
      {Imagem:Coffeb},
      {Imagem:Contador},
      {Imagem:Elden},
      {Imagem:Estacoes},
      {Imagem:Fantastika},
      {Imagem:Finn},
      {Imagem:Inverno},
      {Imagem:Lamp},
      {Imagem:Todo}
    ]
    )
  return (
    <>
    <Intro>
      <ProSection>
      {projeto.map((item)=>
      <FigProImg key={item.Imagem}>
          <ProImg src={item.Imagem} alt="" />
          <FigTexto></FigTexto>
      </FigProImg>
      )}
      </ProSection>
    </Intro>
    </>
  )
}
