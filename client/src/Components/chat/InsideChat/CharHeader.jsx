import styled from '@emotion/styled'
import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
const Header = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Image = styled("img")({
    height: 40,
    width: 40,
    borderRadius: 50
})

const Name = styled(Typography)`
    margin-left: 12px !important; 
`

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px; 
    color : rgba(0,0,0,0.6);
`
const RightComponent = styled(Box)`
    margin-left: auto;
    & > svg{
        padding: 8px;
        font-size: 24px;
        color: #000;
        cursor: pointer;
    }
`

export default function CharHeader({person}) {

  const {activeUsers} = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="Image" />
      <Box>
        <Name>{person.name}</Name>
        
        <Status>{activeUsers?.find(users => users.sub == person.sub) ? 'Online' : 'Offline' }</Status>
        {/* <Status>{Offline}</Status> */}
      </Box>
      <RightComponent>
        <Search/>
        <MoreVert/>
      </RightComponent>
    </Header>
  )
}
