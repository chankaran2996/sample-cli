import React, { createContext, useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();



export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const [user, setUser ] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const registerUser =  async () => {
    if(user.password === user.confirmPassword) {
      console.log("User Registered:", user);
    }
    if(user.userName === "" || user.email === "" || user.password === "" || user.confirmPassword === "") {
      console.log("Please fill all fields");
    }

    const response = await fetch("Your_API_ENDPOINT_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if(response.ok) {
      const data = await response.json();
      console.log("User Registered:", data);
    } else {
      console.error("Registration Failed");
    }
  }

  const loginUser = async () => {
    const response = await fetch("Your_API_ENDPOINT_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    });

    if(response.ok) {
      const data = await response.json();
      console.log("User Logged In:", data);
      navigate("/count");
    } else {
      console.error("Login Failed");
    }

  }

  const logoutUser = async () => {
    setUser({
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    const response = await fetch("Your_API_ENDPOINT_HERE", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.ok) {
      console.log("User Logged Out");
    } else {
      console.error("Logout Failed");
    }
    navigate("/login");
  }

  return (
    <CartContext.Provider value={{ state, dispatch, user, setUser, registerUser, loginUser, logoutUser }}>
      {children}
    </CartContext.Provider>
  );
};