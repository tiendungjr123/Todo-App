import React from 'react'
import {Button} from 'antd'
import styled from 'styled-components'

const buttonStyled = styled(Button)`
  margin-top:5px;
  text-align: left;
`
export default function Todo() {
  return (
    <div>
        <buttonStyled type="text">Item1</buttonStyled>
        <buttonStyled type="text">Item1</buttonStyled>
        <buttonStyled type="text">Item1</buttonStyled>
    </div>
  )
}
