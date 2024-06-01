import { createContext, useState, useRef, useEffect } from "react";

import {io} from 'socket.io-client'
export const AccountContext =  createContext(null);



export default function AccountProvider({children}) {
    const [account,SetAccount] = useState();
    const [person,SetPerson] = useState({});
    const[activeUsers,setActiveUsers] = useState([]);
    const socket = useRef();

    useEffect(()=>{
      socket.current = io('ws://localhost:9000');
    },[])
  return (
    <AccountContext.Provider value={{account,SetAccount,person,SetPerson,socket,activeUsers,setActiveUsers}}>
        {children}
    </AccountContext.Provider>
  )
}
