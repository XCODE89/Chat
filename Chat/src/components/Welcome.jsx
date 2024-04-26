import React, { useEffect } from 'react'
import styled from 'styled-components';
import Robot from "../assets/robot.gif"

const Welcome = ({currentUser}) => {
    useEffect(() => {
    },[currentUser])
    
  return (
    <WelcomeContainer>
        <img src={Robot} alt="Robot" />
        <h1>
            Welcome, <span>{currentUser?.username}!</span>
        </h1>
        <h3>Please select a chat to start messaging</h3>
    </WelcomeContainer>
  )
}

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: white;
    width: 100%;
    height: 100%;
    img {
        height: 10rem;
    }
    span {
        color: #4e00ff;
    }
    
`

export default Welcome