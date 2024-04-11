import React from "react";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";
import ContentCreate from "./components/ContentCreate";


const App = () => {
  return (
    <main className="app d-flex container-fluid p-0 overflow-hidden  bg-light">
      <Sidebar />
      <Routes>
        <Route path="/" element={<ContentCreate />} />
      </Routes>
    

    </main>
  );
};

export default App;
