import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Intro } from './Estilos/style.jsx'
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
import html5 from '../assets/projetos/techs/html5.png'
import css3 from '../assets/projetos/techs/css-3.png'
import js from '../assets/projetos/techs/js.png'
import reacts from '../assets/projetos/techs/reacts.png'
import styles from '../assets/projetos/techs/styled-components.png'
import framer from '../assets/projetos/techs/animation.png'
import { motion } from 'framer-motion'

const FigProImg = styled.figure`
text-align: center;
width: 35vw;
display: flex;
flex-wrap: wrap;
`

const ProImg = styled.img`
width: 34.9vw;
height: 35vh;
box-shadow: 4px 4px black;
border: solid black 1px;
opacity: 0.8;
`

const ProSection = styled.section`
height: 90vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
overflow-y: auto;

`
const FigTexto = styled(motion.figcaption)`
height: 18vh;
width: 35vw;
border: solid black 1px;
box-shadow: 4px 4px black;
background-color: rgb(10000,10000,10000, 0.9);
color:black;
font-family: 'Courier New', Courier, monospace;
font-size: 1rem;
font-style: italic;
`

const Img = styled(motion.img) `
 width:40px;
`
export default function Projetos() {
  const [projeto, setProjeto] = useState(
    [
      { Imagem: Calc, titulo:"Calculadora em React", descricao:"Desenvolvi esta calculadora em um desafio no curso Vai na Web. O propósito era criar uma calculadora com operadores básicos de adição, subtração, divisão e multiplicação. Você pode visitar a minha página em: ", link:"https://calculadora-react-woad-chi.vercel.app/", html: html5, JS: js, reacts: reacts, styles: styles, framer:framer },
      { Imagem: Coffeb, titulo:"CoffeBreak!", descricao:"Um projeto pessoal que desenvolvi em JS puro. O intuito foi criar uma pequena interação do usuário com o desafio proposto na página. O ‘copo’ de café possui um valor exato para ser preenchido, dependendo do valor adicionado ao input, podem existir resultados diferentes. Você pode visitar a minha página em:", html: html5, css: css3, JS: js, link:"https://giulianobotelho.github.io/Coffee-Break/", },
      { Imagem: Contador,titulo:"Contador de Estrelas", descricao:"Calculadora", html: html5, css: css3, JS: js, reacts: reacts, link:"https://giulianobotelho.github.io/contador_react/", },
      { Imagem: Elden, titulo:"Elden Ring Wiki", descricao:"Elden", html: html5, JS: js, reacts: reacts, styles: styles, framer: framer, link:"https://elden-ring-wik-react.vercel.app/", },
      { Imagem: Estacoes, titulo:"Verifique as estações do ano", descricao:"Calculadora", html: html5, css: css3, JS: js, link:"https://giulianobotelho.github.io/Estacoes-do-Ano/", },
      { Imagem: Fantastika, titulo:"Fantastika!", descricao:"Calculadora", html: html5, css: css3, link:"https://giulianobotelho.github.io/Fantastika/", },
      { Imagem: Finn,  titulo:"Página de login: Finn", descricao:"Calculadora", html: html5, css: css3, link:"https://giulianobotelho.github.io/Finn/", },
      { Imagem: Inverno,  titulo:"Página do Inverno", descricao:"Calculadora", html: html5, css: css3, link:"https://giulianobotelho.github.io/Pagina-de-Inverno/", },
      { Imagem: Lamp,  titulo:"Lampada em React", descricao:"Calculadora", html: html5, css: css3, reacts: reacts, link:"https://giulianobotelho.github.io/lampada/", },
      { Imagem: Todo,  titulo:"Minha primeira ToDo List", descricao:"Calculadora", html: html5, JS: js, reacts: reacts, styles: styles, link:"https://giulianobotelho.github.io/To-Do-List_React/", }
    ]
  )
  return (
    <>
      <Intro>
        <ProSection>
          {projeto.map((item) =>
            <FigProImg key={item.Imagem}>
              <h1>{item.titulo}</h1>
              <ProImg src={item.Imagem} alt="" />
              <FigTexto
              initial={{opacity:0.1}}
              whileHover={{opacity:1, y:25}}
            
              >
                <p>{item.descricao} <a href={item.link} target='_blank'>Saiba mais!</a> </p>
                {item.html && <Img  src={item.html}/>}
                {item.css && <Img src={item.css}/>}
                {item.styles && <Img src={item.styles} />}
                {item.JS && <Img src={item.JS} />}
                {item.reacts && <Img src={item.reacts}  />}
                {item.framer && <Img src={item.framer}  />}
              </FigTexto>
            </FigProImg>
          )}
        </ProSection>
      </Intro>
    </>
  )
}
