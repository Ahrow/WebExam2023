import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, CRUDPage, GamePage } from "./pages";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crud" element={<CRUDPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
