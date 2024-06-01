import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Fotter from "./Fotter";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newConversation } from "../../../Services/api";
import Message from "./Message";
import { useRef } from "react";

const Wrapper = styled(Box)`
    background: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: '50%;
;`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 2px 8px;
`;

export default function Messages({ person, conversation }) {
  const [messageFlag, setMessageFlag] = useState(false);
  const { account, socket } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const[file,setFile] = useState();
  const[image,setImage] = useState('');
  const scrollRef = useRef();
  const [incomingMessage, setIncomingMessage] = useState(null);

  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  },[])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessage(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id,messageFlag]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition: 'smooth'});
  },[message])

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessage(prev=> [...prev,incomingMessage])
  },[incomingMessage,conversation])

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if(!file){
          message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversation._id,
            type: "text",
            text: value,
          };

      }
      else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit('sendMessage',message);
      // console.log(message);

      await newConversation(message);
      setValue('');
      setImage('');
      setFile('');

      setMessageFlag(prev => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {message &&
          message.map((ele) => (
            <Container ref={scrollRef}>
              <Message message={ele} />
            </Container>
          ))}
      </Component>
      <Fotter sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile}  setImage={setImage}/>
    </Wrapper>
  );
}
