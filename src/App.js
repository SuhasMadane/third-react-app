import { useState } from "react";
import LoginApp from "./pages/login";
import Register from "./pages/register";
import DisplayUsers from "./pages/displayUsers";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
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
