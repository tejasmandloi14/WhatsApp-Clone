import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatDate, downloadMedia } from "../../../utils/common_utils";
import { AccountContext } from "../../../context/AccountProvider";
import DownloadIcon from '@mui/icons-material/Download';
import {iconPDF} from '../../../constants/data.js'
const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  padding: 5px;
  display: flex;
  width: fit-content;
  margin-left: auto;
  border-radius: 10px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  display:flex;
  width: fit-content;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
  word-break: keep-all;
`;
const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
`;

export default function Message({ message }) {
    const {account} = useContext(AccountContext);
  return (
    <>
    {
        account.sub===message.senderId?
        <Own>
          {
            message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>
          }
            
        </Own>
        :
        <Wrapper>
            {message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
        </Wrapper>
    }
    </>
  );
}

const TextMessage = ({message})=>{
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  )
}
const ImageMessage = ({message})=>{
  return (
    <>
      <Box style={{position:"relative"}}>
        {
          message?.text?.includes('.pdf')?
          <Box style={{display:'flex'}}>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png' alt="pdf" style={{width:'80px', margin:'0px 5px'}} />
            <Typography style={{fontSize:'14px'}} >{message.text.split('/').pop()}</Typography>
          </Box>
          :
          <img style={{width: 300, height: '100%', objectFit: "cover"}} src={message.text} alt={message.text}></img>

        }
        <DownloadIcon onClick={(e)=> downloadMedia(e,message.text)} style={{position:"absolute",bottom:0, right:28, border: '1px solid black', borderRadius:'50%', width:'18px', height:'18px'}}></DownloadIcon>
        <Time style={{position:"absolute",bottom:0, right:0}}>{formatDate(message.createdAt)}</Time>
      </Box>
    </>
  )
}