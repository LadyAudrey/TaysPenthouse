import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import SongSorter from "./pages/SongSorter";
import AlbumInfo from "./pages/AlbumInfo";

function App() {
  return (
    <>
      <body className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sorter" element={<SongSorter />} />
          <Route path="/info" element={<AlbumInfo />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
