import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import Left from './InsideChat/Left';
import Right from './InsideChat/Right';
import ChatBox from './InsideChat/ChatBox';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
  display:flex;
  overflow: hidden;
`

const LeftComponent = styled(Box)`
  min-width : 450px;
  
`

const RightComponent = styled(Box)`
  min-width : 300px;
  width: 73%;
  height: 100%;
  border-left : 1px solid rgba(0,0,0,0.14);
  
`

const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: '30px',
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "0px",
};

export default function ChatDialog() {
  const {person} = useContext(AccountContext);
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
        <Component>
          <LeftComponent>
            <Left/>
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length?<ChatBox/>:<Right/>}
          </RightComponent>
        </Component>
      </Dialog>
    </div>
  )
}
