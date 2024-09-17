import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./pages/Header/Header.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Search from "./pages/Search/Search.jsx";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />``
          <Route path="/Search" element= { < Search /> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
