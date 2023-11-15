import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, DriversPage } from "./pages";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";
import { DriverProvider } from "./components/contexts/driver-context";

function App() {
  return (
    <BrowserRouter>
      <DriverProvider>
        <div className="bg-black">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
          <Footer />
        </div>
      </DriverProvider>
    </BrowserRouter>
  );
}

export default App;
