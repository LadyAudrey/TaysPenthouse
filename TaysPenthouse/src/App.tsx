import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
