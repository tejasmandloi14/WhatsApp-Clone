import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import { Menu,MenuItem } from '@mui/material'
import styled from '@emotion/styled';

const MenuList = styled(MenuItem)`
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
    font-size: 14px;
    width: 150px;


`

export default function LeftHeaderMenu({setOpenDrawer}) {

    const [open,setOpen] = useState(null);
    const handleClose = ()=>{
        setOpen(null);
    }
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }

    const handleLogout = ()=>{
      window.location.reload();
    }
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu anchorEl={open} open={open} keepMounted onClose={handleClose} getContentAnchorE1={null}
      anchorOrigin={{vertical:'bottom',horizontal:'center'}} transformOrigin={{vertical:'top',horizontal:'right'}}>
        <MenuList onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuList>
        <MenuList onClick={handleClose}>My Account</MenuList>
        <MenuList onClick={handleLogout}>Logout</MenuList>

      </Menu>
    </>
  )
}
