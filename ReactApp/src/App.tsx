import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, DriversPage } from "./pages";
import { Header } from "./components/ui/header";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
