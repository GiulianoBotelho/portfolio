import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Start = styled.header`
scroll-snap-align: center;
height: 8vh;
overflow: hidden;
z-index: -2;
`
const SideBar = styled.nav`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 35vw;
    list-style: none;
}

`
const LinkStyle = styled(Link)`
text-decoration: none;
color: #FFE482;
`

const List = styled(motion.li)`
    cursor: pointer;
    font-size: 1.6rem;  
    transition:500ms;
    &:hover{
      scale:1.05;
      transition:500ms;
      color:#c59c09;

    }
`

export default function Header() {
  return (
    <>
      <Start>
        <SideBar>
          <ul>
            <List
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5
              }}
            >
              <LinkStyle to='/'>Início</LinkStyle></List>
            <List initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7
              }}
            ><LinkStyle to='Sobre'>Sobre</LinkStyle></List>
            <List initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
              }}
            ><LinkStyle to='Projetos'>Projetos</LinkStyle></List>
          </ul>
        </SideBar>
      </Start>
    </>
  )
}
