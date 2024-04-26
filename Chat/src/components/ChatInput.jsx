import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EmojiPicker from "emoji-picker-react"
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmileFill} from "react-icons/bs"

const ChatInput = ({handleSendMsg}) => {

  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [msg, setMsg] = useState("")
  useEffect(() =>{
  }, [msg])

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }
  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  }

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length>0) {
      handleSendMsg(msg);
      setMsg("");
    }
  }

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
          {showEmojiPicker && <EmojiPicker 
            height={350}
            width={300}
            previewConfig={
              {showPreview: false} // defaults to: true
            }
            onEmojiClick={handleEmojiClick}/>}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input type="text" placeholder='Escribe aqui...' value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <button className='submit'>
          <IoMdSend size={24}/>
        </button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #080420;
  padding: 0 0.3rem;
  padding-bottom: 0.3rem;
  .button-container {
    display: flex;
    margin-right: 3px;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .epr-main {
        position: absolute;
        top: -380px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9186f3;
        .epr-body::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9186f3;
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .epr-emoji-category-label {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      outline: none;
      &::selection {
        background-color: #9186f3;
      }
    }
    button {
      padding: 0.3rem 1rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`

export default ChatInput