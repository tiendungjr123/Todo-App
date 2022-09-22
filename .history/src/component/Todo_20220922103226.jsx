import React from 'react'
import {Button} from 'antd'
import styled from 'styled-components'

const btn = styled.div`
  display:flex;
  flex-decoration: coloum;
`

export default function Todo() {
  return (
    <div >
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
    </div>
  )
}
