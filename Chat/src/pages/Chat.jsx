import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { allUsersRoute, host } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';
import axios from 'axios';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import {Socket, io} from "socket.io-client";
import { UserContext } from "../utils/context";

const Chat = () => {
  
  const  socket= useRef()
  console.log("otro socket", socket)

  const navigate = useNavigate()

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const verify = async () => {
      if (!localStorage.getItem("chat-user")) {
        navigate("/login")
      } else {
        const response = await JSON.parse(localStorage.getItem("chat-user"))
        console.log("/*/*", response)
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-user")));
        setIsLoaded(true)
      }
    }
    verify()
  },[])

  useEffect(() => {
    console.log("currentuser", currentUser)
    if (currentUser) {
      socket.current = io(host);
      console.log("*******socket", socket.current)
      socket.current.emit("add-user", currentUser._id);
    }
  },[currentUser])

  
  useEffect(() => {
    const allContacts = async() => {
      if(currentUser) {
        if(currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
          setContacts(data.data)
        } else {
          navigate("/setavatar")
        }
      }
    }
    allContacts()
  },[currentUser])
  
  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <ChatContainerStyled>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>
        {isLoaded && currentChat === undefined 
        ?
          (<Welcome currentUser={currentUser}/>)
        :
          (<ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>)
        }
      </div>
    </ChatContainerStyled>
  )
}

const ChatContainerStyled = styled.div`
  height: 100vh;
  width: 100vW;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: flex;
    @media screen and (min-width:720px) and (max-width:1080px){
      grid-template-columns: 35% 65%;
    }
  }
`

export default Chat