import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Sample from "./sample"
import PageNotFount from "./pages/PageNotFount"
import Example from "./Example"
import { CartProvider } from "./CartContext"
import Counter from "./Counter"


function App() {

  

  return (
    <>
    {/* <Example name="Example 1"/>
    <Example name="Example 2"/>
    <Example name="Example 3"/> */}
    {/* <Sample /> */}
    {/* <LoginPage />
    <RegisterPage /> */}
    <BrowserRouter>
      <CartProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/count" element={<Counter />} />
            <Route path="*" element={<PageNotFount />} />
          </Routes> 
      </CartProvider>
    </BrowserRouter> 
    </>
  )
}

export default App
