import React from "react";
import { Box, Dialog, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { addUser } from "../../../Services/api";

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
};

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    font-size: 18px;
    margin-top: 15px;
    color: #4a4a4a;
  }
`;

const QRcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
  position: "relative",
  right: -40,
});

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 50px 0px 50px 50px;
`;

export default function LoginDialog() {
  const loginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    SetAccount(decoded);
    await addUser(decoded);
  };
  const loginError = () => {
    console.log("Error");
  };

  const {SetAccount} = useContext(AccountContext)

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use whatsapp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open whatsapp on your phone</ListItem>
            <ListItem>2. Tap menu setting and select Linked Devices</ListItem>
            <ListItem>
              3. Point your phone to the screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRcode src={qrCodeImage} alt="QR Code Image" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(45%)",
            }}
          >
            <GoogleLogin onSuccess={loginSuccess} onError={loginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
}
