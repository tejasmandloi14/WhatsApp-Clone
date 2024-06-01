import styled from '@emotion/styled';
import { ArrowBack } from '@mui/icons-material';
import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import InfoDrawerProfile from './InfoDrawerProfile';


const drawerStyle = {
    left:30,
    top: 13,
    height: '96.2%',
    width: '29.3%'
}

const Header = styled(Box)`
    background-color: #1a6b5c;
    height: 109px;
    color: #FFFFFF;
    box-shadow: none;
    display: flex;

    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Component = styled(Box)`
    background-color: #ededed;
    height: 83%;
    
    
`

export default function InfoDrawer({open,setOpen}) {

    const handleClose = ()=>{
        setOpen(false);
    }
  return (
    <>
        <Drawer open={open} onClose={handleClose} PaperProps={{sx: drawerStyle}} style={{zIndex:1400}} >
            <Header>
                <ArrowBack onClick={handleClose}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <InfoDrawerProfile/>
            </Component>
        </Drawer> 
    </>
  )
}
