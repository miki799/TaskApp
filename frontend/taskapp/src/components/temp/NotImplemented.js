import React from "react";
import styled from "styled-components";
import underConstruction from "../../assets/underConstruction.svg";

const NotImplemented = () => (
  <>
    <Title>Not implemented</Title>
    <Image src={underConstruction}/>
  </>
);

const Image = styled.img`
  width: 500px;
  height: 500px;
  color: ${({theme}) => theme.color.mediumBlueBackground};
`;

const Title = styled.h1`
  margin-bottom: 25px;
`;

export default NotImplemented;
