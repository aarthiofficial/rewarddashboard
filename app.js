import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Activities from "./pages/Activities";
import Rewards from "./pages/Rewards";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
