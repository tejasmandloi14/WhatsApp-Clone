import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./accounts/LoginDialog";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import ChatDialog from "../chat/ChatDialog";

const LoginHeader = styled(AppBar)`
  height: 122px;
  background-color: #00bfa5;
  box-shadow: none;
`;


const Header = styled(AppBar)`
  height: 122px;
  background-color: #00A884;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

export default function Messenger() {
  
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <Header>
          <ChatDialog />
        </Header>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
}
