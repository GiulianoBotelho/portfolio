import React from 'react'
import { useState } from 'react'
import { Intro } from './Estilos/Estilo-Inicio.jsx'
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
import { SobreMim } from './Estilos/Estilo-sobre.jsx'
import { FigProImg } from './Estilos/Estilo-projeto.jsx'
import { ProImg } from './Estilos/Estilo-projeto.jsx'
import { ProSection } from './Estilos/Estilo-projeto.jsx'
import { FigTexto } from './Estilos/Estilo-projeto.jsx'
import { Img } from './Estilos/Estilo-projeto.jsx'
import { ProTitulo } from './Estilos/Estilo-projeto.jsx'

export default function Projetos() {
  const [projeto, setProjeto] = useState(
    [
      { Imagem: Calc, titulo: "Calculadora em React", Alt: "Imagem projeto Calculadora", descricao: "Desenvolvi esta calculadora em um desafio no curso Vai na Web. O propósito era criar uma calculadora com operadores básicos de adição, subtração, divisão e multiplicação. Você pode visitar a minha página em: ", link: "https://calculadora-react-woad-chi.vercel.app/", html: html5, JS: js, reacts: reacts, styles: styles, framer: framer, github: "https://github.com/GiulianoBotelho/Calculadora_React" },
      { Imagem: Coffeb, titulo: "CoffeBreak!", Alt: "Imagem projeto CoffeBreak", descricao: "Um projeto pessoal que desenvolvi em JS puro. O intuito foi criar uma pequena interação do usuário com o desafio proposto na página. O ‘copo’ de café possui um valor exato para ser preenchido, dependendo do valor adicionado ao input, podem existir resultados diferentes. Você pode visitar a minha página em:", html: html5, css: css3, JS: js, link: "https://giulianobotelho.github.io/Coffee-Break/", github: "https://github.com/GiulianoBotelho/Coffee-Break" },
      { Imagem: Contador, titulo: "Contador de Estrelas", Alt: "Imagem projeto Contador", descricao: "O Contador foi uma página simples com a temática livre. Minha primeira página em React, o objetivo dela foi criar dois botões, um para incluir valore s de 1 em 1 e outro para subtrair. Você pode visitar minha página em:", html: html5, css: css3, JS: js, reacts: reacts, link: "https://giulianobotelho.github.io/contador_react/", github: "https://github.com/GiulianoBotelho/contador_react" },
      { Imagem: Elden, titulo: "Elden Ring Wiki", Alt: "Imagem projeto Elden Ring Wiki", descricao: "Esse foi o projeto onde eu mais dediquei tempo e aprendi bastante com ele. Desenvolvi uma página onde eu pudesse contar um pouco da história do jogo, apresentando os chefes principais juntamente com suas 'cutscenes'. Também conta com informações sobre mapas, castelos e personagens. Você pode visitar minha página em:", html: html5, JS: js, reacts: reacts, styles: styles, framer: framer, link: "https://elden-ring-wik-react.vercel.app/", github: "https://github.com/GiulianoBotelho/Elden_Ring_wik-React" },
      { Imagem: Estacoes, titulo: "Verifique as estações do ano", Alt: "Imagem projeto das estações do ano", descricao: "Criei essa página nos meus primeiros passos em JS.  Possui 4 botões e cada um deles você acessa uma pequena apresentação sobre as estações do ano. Aprendi a aplicar condições, eventos de click e um pouco de CSS. Você pode visitar minha página em:", html: html5, css: css3, JS: js, link: "https://giulianobotelho.github.io/Estacoes-do-Ano/", github: "https://github.com/GiulianoBotelho/Estacoes-do-Ano" },
      { Imagem: Fantastika, titulo: "Fantastika!", Alt: "Imagem projeto Fantastika", descricao: "Desafio proposto pelo curso Vai na Web. Criar uma página responsiva utilizando display flex. A ideia era criar uma landing page de uma loja de banho e tosa.  Você pode visitar minha página em:", html: html5, css: css3, link: "https://giulianobotelho.github.io/Fantastika/", github: "https://github.com/GiulianoBotelho/Fantastika" },
      { Imagem: Finn, titulo: "Página de login: Finn", Alt: "Imagem projeto Finn", descricao: "Criada no início dos estudos de display flex, a página propõe uma tela de login com a temática do Finn. Você pode visitar minha página em:", html: html5, css: css3, link: "https://giulianobotelho.github.io/Finn/", github: "https://github.com/GiulianoBotelho/Finn" },
      { Imagem: Inverno, titulo: "Página do Inverno", Alt: "Imagem projeto de Inverno", descricao: "Essa página veio como uma proposta do curso vai na web para aprimorar os conhecimentos em display flex. Posicionamento de texto, imagens ,logo, respeitando a semântica da página dividindo-a em header, main e footer. Você pode visitar minha página em:", html: html5, css: css3, link: "https://giulianobotelho.github.io/Pagina-de-Inverno/", github: "https://github.com/GiulianoBotelho/Pagina-de-Inverno" },
      { Imagem: Lamp, titulo: "Lampada em React", Alt: "Imagem projeto Lampada em React", descricao: "Minha primeira aplicação em react. Criar uma lâmpada com dois interruptores ON/OFF, utilizando condições e operadores lógicos. Você pode visitar minha página em:", html: html5, css: css3, reacts: reacts, link: "https://giulianobotelho.github.io/lampada/", github: "https://github.com/GiulianoBotelho/lampada" },
      { Imagem: Todo, titulo: "Minha primeira ToDo List", Alt: "Imagem projeto To-Do List", descricao: "Uma lista de tarefas simples feita em react. A ideia proposta era armazenar os dados recebidos pelo input dentro da lista. Você pode visitar minha página em:", html: html5, JS: js, reacts: reacts, styles: styles, link: "https://giulianobotelho.github.io/To-Do-List_React/", github: "https://github.com/GiulianoBotelho/To-Do-List_React" }
    ]
  )

  
  return (
    <>
      <Intro>
        <ProSection>
          {projeto.map((item) =>
            <FigProImg key={item.Imagem}>
              <section>
                <ProTitulo>
                  {item.titulo}
                </ProTitulo>
                <a style={{ textDecoration: "none" }} href={item.link} target='_blank'>  <SobreMim style={{ fontSize: '12px', color: "black", fontWeight: "bold", backgroundColor: "goldenrod" }}> Minha Página</SobreMim></a>
                <a style={{ textDecoration: "none" }} href={item.github} target='_blank'>   <SobreMim style={{ fontSize: '12px', color: " goldenrod", fontWeight: "bold", backgroundColor: "black", color: "goldenrod" }}> Repositório</SobreMim></a>
              </section>
              <ProImg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={item.Imagem} alt={item.Alt} />
              <FigTexto
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ delay: 0.5 }}
              >
                <p>{item.descricao}</p>
                <figure>
                  {item.html && <Img src={item.html} />}
                  {item.css && <Img src={item.css} />}
                  {item.styles && <Img src={item.styles} />}
                  {item.JS && <Img src={item.JS} />}
                  {item.reacts && <Img src={item.reacts} />}
                  {item.framer && <Img src={item.framer} />}
                </figure>
              </FigTexto>
            </FigProImg>
          )}
        </ProSection>
      </Intro>
    </>
  )
}
