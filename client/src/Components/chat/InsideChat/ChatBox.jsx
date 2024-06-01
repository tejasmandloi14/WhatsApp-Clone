import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CharHeader from './CharHeader'
import Messages from './Messages'
import { getConversation } from '../../../Services/api'
// import Fotter from './Fotter'
import { AccountContext } from '../../../context/AccountProvider'
export default function ChatBox() {

  const [conversation,setConversation] = useState({});


    const {person,account} = useContext(AccountContext);
    useEffect(()=>{
      const getConversationDetails = async () =>{
        let data = await getConversation({senderId: account.sub, receiverId: person.sub});
        setConversation(data);
        console.log(data);
      }
      getConversationDetails();
    },[person.sub])
  return (
    <Box>
      <CharHeader person={person}/>  
      <Messages person={person} conversation={conversation}/>
    </Box>
  )
}
