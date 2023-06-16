import { useState } from "react";
import LoginApp from "./pages/login";
import Register from "./pages/register";
import DisplayUsers from "./pages/displayUsers";
import Home from "./pages/Home";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/Home"}>Home</Link>
        <Link to={"login"}>Login</Link>
        <Link to={"/register"}>Sign up</Link>
        <Link to={"/displayUsers"}>See Users</Link>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/displayUsers" element={<DisplayUsers />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
