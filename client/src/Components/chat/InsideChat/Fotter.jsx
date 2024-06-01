import { Box, InputBase } from '@mui/material'
import React, { useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Mic } from '@mui/icons-material';
import styled from '@emotion/styled';
import { uploadFile } from '../../../Services/api';
const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0px 15px;
    & > *{
        margin: 5px;
        color: #919191;
    }
`

const InputBox = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`
const InputSearch = styled(InputBase)`
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
    width: 100%;
`
const Clip = styled(AttachFileIcon)`
    transform: rotate(40deg)
`
export default function Fotter({sendText,setValue,value,file,setFile,setImage}) {

  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setImage(response.data);
      }
    }
    getImage();
  })


  const onFileChange = (e)=>{
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return (
    <Container>
        <EmojiEmotionsOutlinedIcon/>
        <label htmlFor="fileInput" style={{cursor:'pointer'}}>
          <Clip/>
        </label>
        <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=> onFileChange(e)}/>
        <InputBox><InputSearch placeholder='Type a message' onChange={(e)=> setValue(e.target.value)} onKeyPress={(e)=>sendText(e)}  value={value}/></InputBox>
      <Mic/>
    </Container>
  )
}
