import { useState } from "react";
import LoginApp from "./pages/login";
import Register from "./pages/register";
import DisplayUsers from "./pages/displayUsers";
import Home from "./pages/Home";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import NavigationLinks from "./pages/Navigationlinks";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationLinks />
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
