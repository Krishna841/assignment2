import "./App.css";
import Bg from "./components/bg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/main_content";
import Live from "./components/live";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bg />}>
            <Route index element={<MainContent />} />
            <Route path="live" element={<Live/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
