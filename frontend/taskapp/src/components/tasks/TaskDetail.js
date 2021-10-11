import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BiX } from "react-icons/bi";
import { FaArrowsAltH } from "react-icons/fa";

const option = {
  edit: "edit",
  delete: "delete",
};

const TaskDetail = ({ handleClose, show, task }) => {
  const [action, setAction] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setAction(null);
    setDescription(task.description);
    setName(task.name);
  }, []);

  return (
    <Background show={show}>
      <InnerContainer>
        <Header>
          {action === option.edit && (
            <NameInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {action !== option.edit && <Title>{task.name}</Title>}
          <Close onClick={handleClose} />
        </Header>
        <DescriptionContainer>
          {action === option.edit && (
            <DescriptionInput
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
          {action !== option.edit && <p>{task.description}</p>}
        </DescriptionContainer>
        <Footer>
          {!action ? (
            <>
              <TaskDate>{task.start}</TaskDate>
              <Arrow />
              <TaskDate>{task.end}</TaskDate>
              <InnerInnerContainer>
                <Edit onClick={() => setAction(option.edit)} />
                <Delete onClick={() => setAction(option.delete)} />
              </InnerInnerContainer>
            </>
          ) : (
            <>
            
              <InnerInnerContainer>
                <Save
                  onClick={() => {
                    setConfirm(true);
                    setAction(null);
                  }}
                />
                <Cancel
                  onClick={() => {
                    setConfirm(false);
                    setAction(null);
                  }}
                />
              </InnerInnerContainer>
            </>
          )}
        </Footer>
      </InnerContainer>
    </Background>
  );
};

const Background = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const InnerContainer = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.color.darkBackground};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  padding: 25px 25px 15px 25px;
  width: 900px;
  height: auto;
  min-height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lapis};
  padding-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 48px;
  color: ${({ theme }) => theme.color.lapis};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 40px;
`;

const Close = styled(VscChromeClose)`
  font-size: 35px;
  color: #000;
  cursor: pointer;
  margin: 0px 0px 0px auto;
  color: ${({ theme }) => theme.color.lapis};
  &:hover {
    color: ${({ theme }) => theme.color.mediumBlueBackground};
  }
`;

const DescriptionContainer = styled.div`
  margin: 15px 250px 0px 0px;
  p {
    padding: 5px;
    font-size: 24px;
  }
`;

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.lapis};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 100%;
`;

const InnerInnerContainer = styled.div`
  margin-right: 0;
  margin-left: auto;
`;

const Arrow = styled(FaArrowsAltH)`
  font-size: 20px;
  margin: 0 10px;
`;

const TaskDate = styled.p`
  font-size: 20px;
`;

const Edit = styled(AiFillEdit)`
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lapis};
  &:hover {
    color: ${({ theme }) => theme.color.mediumBlueBackground};
  }
`;

const Delete = styled(MdDelete)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lapis};
  &:hover {
    color: ${({ theme }) => theme.color.mediumBlueBackground};
  }
`;

const DescriptionInput = styled.textarea`
  width: 100%;
  height: 80%;
  border: none;
  font-family: "Fira Sans";
  resize: none;
  overflow: hidden;
  border-radius: 10px;
  padding: 5px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background-color: ${({ theme }) => theme.color.lightBlueBackground};
  border: none;
  font-size: 24px;
  border: none;
  outline-style: none;
`;

const NameInput = styled.input`
  font-size: 48px;
  font-family: "Fira Sans";
  width: 800px;
  color: ${({ theme }) => theme.color.lapis};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightBlueBackground};
  margin-top: 40px;
  border: none;
  outline-style: none;
`;

const Save = styled(TiTick)`
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lapis};
  &:hover {
    color: ${({ theme }) => theme.color.mediumBlueBackground};
  }
`;

const Cancel = styled(BiX)`
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lapis};
  &:hover {
    color: ${({ theme }) => theme.color.mediumBlueBackground};
  }
`;

export default TaskDetail;
