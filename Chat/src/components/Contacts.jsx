import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from "../assets/react.svg"

const Contacts = ({contacts, currentUser, changeChat}) => {

  const [currentUserName, setCurrentUserName] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)
  

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  },[currentUser,contacts])

  const changeCurrentUser = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact)
  };
  return (
    <>
      {contacts.length>0 && currentUserImage && currentUserName && (
        <ContactsContainer>
            <div className="brand">
              <img src={logo} alt="logo"/>
              <h3>snappy</h3>
            </div>
            <div className="contacts">
              {
                contacts.map((contact, index) => {
                  return (
                    <div className={`contact ${index === currentSelected ? "selected" : ""}`} key={index} onClick={() => changeCurrentUser(index, contact)}>
                      <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                      </div>
                      <div className="username">
                        <h3>{contact.username}</h3>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="current_user">
              <div className="avatar">
                <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
              </div>
              <div className="username">
                <h2>{currentUserName}</h2>
              </div>
            </div>
        </ContactsContainer>
      )}
    </>
  )
}

const ContactsContainer = styled.div`
  display: grid;
  grid-template-rows: 15% 70% 15%;
  overflow: hidden;
  background-color: #080420;
  width: 30%;
  min-width: 6rem;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
      @media screen and (max-width: 480px) {
              font-size: 14px;
        }
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    overflow-x: hidden;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      @media screen and (min-width: 100px) and (max-width: 720px) {
        flex-direction: column;
        align-items: left;
        align-items: flex-start;
        gap: 0;
      }
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
        
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .current_user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    .avatar {
      img {
        height: 2rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
        padding: 0 0.5;
        font-size: 18px;
      }
    }
    @media screen and (max-width: 720px) {
      gap: 0;
      align-items: flex-start;
      flex-direction: column;
      .username {
        h2 {
          font-size: 14px;
        }
      }
    }
  }
  
`

export default Contacts