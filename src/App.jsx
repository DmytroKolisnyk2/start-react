import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage/TestPage";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    );
  }
}

export default App;
