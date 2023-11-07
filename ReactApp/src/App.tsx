import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, GamePage, DriversPage, TeamsPage, RacesPage } from "./pages";
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
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
