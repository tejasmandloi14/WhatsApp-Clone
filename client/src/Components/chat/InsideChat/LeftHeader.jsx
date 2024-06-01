import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import styled from '@emotion/styled'
import { Chat as MessageIcon, DataSaverOff } from '@mui/icons-material'
import LeftHeaderMenu from './LeftHeaderMenu'
import InfoDrawer from './InfoDrawer'
const Component = styled(Box)`
 height: 44px;
 background-color:#ededed;
 padding : 8px 16px 8px 16px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
const Image = styled('img')({
    height:45,
    width:45,
    borderRadius:'50%'
})

const Wrapper = styled(Box)`
    margin-left: auto;
    & > *{
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };

    & :second-child {
        font-size: 22px;
        margin-right : 8px;
    };

    & :first-child {
        
        margin-right : 12px;
    }

`

export default function LeftHeader() {

    const {account} = useContext(AccountContext);
    const [openDrawer,setOpenDrawer] = useState(false);

    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }

  return (
    <>
    <Component>
        <Image src={account.picture} alt="Profile Photo" onClick={toggleDrawer} />
        <Wrapper>
            <DataSaverOff/>
            <MessageIcon/>
            <LeftHeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
        
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
