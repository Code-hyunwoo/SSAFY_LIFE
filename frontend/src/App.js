import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diary from "./routes/Diary";
import Home from "./routes/Home"
import WebRTC from "./routes/WebRTC";
import Guest from "./routes/Guest";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/webRTC" element={<WebRTC />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/guest" element={<Guest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
