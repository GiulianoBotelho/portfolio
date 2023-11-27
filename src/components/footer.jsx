import React from 'react'
import styled from 'styled-components'
import Linkedin from '../assets/Imagens/linkedin.png'
import Github from '../assets/Imagens/github.png'
import Insta from '../assets/Imagens/instagram.png'
const Rodape = styled.footer`
position:fixed;
bottom: 0;
ul{
  list-style: none;
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: space-around;
}
`

export default function Footer() {
  return (
    <>
    {/* <Rodape>
      <nav>
        <ul>  Contatos:
          <li><a target='_blank' href="https://www.linkedin.com/in/giuliano-botelho/"><img src={Linkedin} alt="" /></a></li>
          <li><a target='_blank' href="https://github.com/GiulianoBotelho"><img src={Github} alt="" /></a></li>
          <li><a target='_blank' href="https://www.instagram.com/giuliano_botelho/"><img src={Insta} alt="" /></a></li>
        </ul>
      </nav>
      </Rodape> */}
    </>
  )
}
