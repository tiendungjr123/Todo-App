import React from 'react'
import {Button} from 'antd'
import styled from 'styled-components'



export default function Todo() {
  return (
    <div style={{display:'flex',flexDirection:column}} >
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
        <Button type="text">Item1</Button>
    </div>
  )
}
