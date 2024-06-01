import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import styled from '@emotion/styled';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items: center;
`

const IconBox = styled(Box)`
    position: absolute;
    padding: 6px 10px;
    color: #919191;
    height: 100%;

`

const Wrapper = styled(Box)`
 background-color: #f0f2f5;
 position: relative;
 width: 100%;
 margin: 0px 10px;
 border-radius: 10px;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    height: 18px;
    padding-left: 65px;
    font-size: 14px;
`

export default function Search({setText}) {
  return (
    <Component>
        <Wrapper>
            <IconBox>
                <SearchIcon fontSize='10px'/>
            </IconBox>
            <InputField placeholder='Search or start new chat' onChange={(e)=>{
                setText(e.target.value);
            }}/>
        </Wrapper>
    </Component>
  )
}
