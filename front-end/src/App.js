import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from "./pages/NoPage";
import ProviderProfile from "./pages/ProviderProfile";
import BookAnAppoinment from "./pages/BookAnAppoinment";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<ProviderProfile />} />
        <Route path="/book-an-appointment" element={<BookAnAppoinment />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
