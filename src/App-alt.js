import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import RawData from "./RawData";
import Home from "./Home";
import Evaluation from "./Evaluation";
import NoPage from "./NoPage";

const App = () => {
  const [processedData, setProcessedData] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar navbar a">
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route index element={<Home processedData={processedData} />} />
            <Route
              path="/"
              element={<Home processedData={processedData} />}
            />
            <Route
              path="/rawData"
              element={
                <RawData
                  processedData={processedData}
                  setProcessedData={setProcessedData}
                />
              }
            />
            <Route
              path="/evaluation"
              element={<Evaluation processedData={processedData} />}
            />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
