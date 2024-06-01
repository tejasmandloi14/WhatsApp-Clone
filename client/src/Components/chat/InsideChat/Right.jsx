import { Box, Divider, Typography,styled } from '@mui/material'
import React from 'react'
import {emptyChatImage} from '../../../../src/constants/data.js'

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0px;
  text-align: center;
  height: 100vh;
`
const Container = styled(Box)`
  padding: 0px 200px;
`
const Image = styled("img")({
  width: 400,
  marginTop:100
})

const StyleDivider = styled(Divider)`
  margin: 40px 0px;
  opacity: 0.4;
`

export default function Right() {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="EmptyImage" />
        <Typography style={{fontSize:'32px',margin:'25px 0px 10px 0px', fontFamily:'inherit',fontWeight:300,color:'#41525d'}}>WhatsApp Web</Typography>
        <Typography style={{fontSize:'14px', fontFamily:'inherit',fontWeight:400,color:'#667781'}}>
          Now send and receive messages without keeping your phone online.
          <br/>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Typography>
        <StyleDivider/>
      </Container>
    </Component>
  )
}
