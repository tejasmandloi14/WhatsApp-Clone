import styled from '@emotion/styled'
import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { setConversation } from '../../Services/api'
const Component = styled(Box)`
    display:flex;
    height:45px;
    padding: 13px 0px;
    cursor: pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius : '50%',
    padding: '0px 14px'
})

const StyleDivider = styled(Divider)`
    margin: 0px 0px 0px 70px;
    background-color: #e9edef;
    opacity: 0.6;
`

export default function Conversation({user}) {

  const {SetPerson,account} = useContext(AccountContext);

  const getUser = async ()=>{
    SetPerson(user);
    await setConversation({senderId:account.sub, receiverId: user.sub})
  }
  return (
    <>
    <Component onClick={getUser}>
      <Box>
        <Image src={user.picture} alt="Dp" />
      </Box>
      <Box><Typography>{user.name}</Typography></Box>
    </Component>
    <StyleDivider/>
    </>
  )
}
