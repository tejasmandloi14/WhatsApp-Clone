import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../Services/api';
import { Box } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider';
import styled from '@emotion/styled';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

export default function Conversations({text}) {

    const [users,setUsers] = useState([]);
    const {account,socket,setActiveUsers} = useContext(AccountContext);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            let res = await getUsers();
            const filteredUser = res.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredUser);

        }
        fetchData();
    },[text])

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on('getUsers',user=>{
            setActiveUsers(user)
        })
    },[account])

  return (
    <>
        <Component>
            {
                users.map(user =>{
                    let val=null;
                    if(user.sub !== account.sub) val= <Conversation user={user}/>
                    return val;
                     
                })
            }
        </Component>
    </>
  )
}
