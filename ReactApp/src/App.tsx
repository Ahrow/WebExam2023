import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, DriversPage } from "./pages";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";

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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
