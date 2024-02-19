import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import logo from "../assets/react.svg"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import registerRoute from '../utils/APIRoutes';
import handleValidation from "../utils/handleValidation"

const Register = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  useEffect(() => {

  }, [])

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (handleValidation(values)) {
      const { username, email, password} = values
      const {data} = await axios.post(registerRoute, {
        username, 
        email, 
        password
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-user", JSON.stringify(data.user))
      }
      navigate("/")
    };
  };
  
  const handleOnChange = (event) => {
    setValues({
      ...values, 
      [event.target.name]: event.target.value})
  }

  return (
    <>
      <FormContainer>
          <div>Register</div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className='brand'>
              <img src={logo} alt="" />
              <h1>snappy</h1>
            </div>
            <input type="text" placeholder='Username' name='username' onChange={(e) => handleOnChange(e)}/>
            <input type="email" placeholder='Email' name='email' onChange={(e) => handleOnChange(e)}/>
            <input type="password" placeholder='Password' name='password' onChange={(e) => handleOnChange(e)}/>
            <input type="password" placeholder='Confirm password' name='confirmPassword' onChange={(e) => handleOnChange(e)}/>
            <button type='submit'>Create User</button>
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </form>
      </FormContainer>
      <ToastContainer>

      </ToastContainer>
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1{
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      color: white;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5ease-in-out;
      &:hover {
        background-color: #4e0eff
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold
      }
    }
  }
`;

export default Register