import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

const App = () => {
  return (
    // <Provider store={store}>
    // <Router>
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          </Routes>
        </Container>
      </main>
    // </Router>
    // </Provider>
  );
};

export default App;