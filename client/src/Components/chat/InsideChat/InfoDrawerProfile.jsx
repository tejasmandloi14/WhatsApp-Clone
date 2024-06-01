import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'


import { AccountContext } from '../../../context/AccountProvider'
import styled from '@emotion/styled';

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`

const DsecriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #8696A0;
    }
`

const ImageProfile = styled("img")({
    width: 125,
    height: 125,
    borderRadius : '50%',
    padding: '25px 0px'
})

const BoxWrapper = styled(Box)`
    background-color: #FFFFFF;
    padding: 12px 32px 2px;
    box-shadow : 0px 1px 3px rgba(0,0,0,0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0px;
        color: #4A4A4A;
    }
`

export default function InfoDrawerProfile() {


    const {account} = useContext(AccountContext);
  return (
    <>
        <ImageContainer>
            <ImageProfile src={account.picture} alt="Profile Photo" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DsecriptionContainer>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DsecriptionContainer>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Fight for the things that you care about, but do it in a way that will lead others to join you. ❤️</Typography>
        </BoxWrapper>
    </>
  )
}
